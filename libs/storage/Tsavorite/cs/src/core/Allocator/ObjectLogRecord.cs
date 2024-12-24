﻿// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

using System.Diagnostics;
using System.Runtime.CompilerServices;

#pragma warning disable CS1591 // Missing XML comment for publicly visible type or member

namespace Tsavorite.core
{
    /// <summary>The in-memory record on the log: header, key, value, and optional fields</summary>
    /// <remarks>The space is laid out as:
    ///     <list>
    ///     <item>[RecordInfo][SpanByte key][int valueId][DBId?][ETag?][Expiration?][FillerLen]</item>
    ///     </list>
    /// This lets us get to the key and value without intermediate computations to account for the optional fields.
    /// </remarks>
    public unsafe struct ObjectLogRecord : IReadOnlyLogRecord
    {
        internal readonly LogRecordBase recBase;
        KeyOverflowAllocator keyAlloc;
        ObjectIdMap objectIdMap;

        private const int ValueLen = ObjectIdMap.ObjectIdSize;

        // This ctor overload is primarily used for utility calculations.
        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        internal ObjectLogRecord(long physicalAddress) => recBase = new(physicalAddress);

        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        internal ObjectLogRecord(long physicalAddress, KeyOverflowAllocator keyAlloc, ObjectIdMap objectIdMap = null)
            : this(physicalAddress)
        {
            // This ctor overload is primarily used in passing to IObjectSessionFunctions callbacks; the primary constructor is just for record parsing.
            this.keyAlloc = keyAlloc;
            this.objectIdMap = objectIdMap;
        }

        #region IReadOnlyRecord
        /// <inheritdoc/>
        public readonly ref RecordInfo InfoRef => ref recBase.InfoRef;
        /// <inheritdoc/>
        public readonly RecordInfo Info => recBase.Info;
        /// <inheritdoc/>
        public readonly SpanByte Key => recBase.Key;
        /// <inheritdoc/>
        public readonly SpanByte ValueSpan => throw new TsavoriteException("ObjectLogRecord does not have SpanByte values");
        /// <inheritdoc/>
        public readonly IHeapObject ValueObject => GetValue();
        /// <inheritdoc/>
        public readonly int DBId => recBase.GetDBId(ValueLen);
        /// <inheritdoc/>
        public readonly long ETag => recBase.GetETag(ValueLen);
        /// <inheritdoc/>
        public readonly long Expiration => recBase.GetExpiration(ValueLen);
        #endregion //IReadOnlyRecord

        internal readonly int* ValueIdAddress => (int*)recBase.ValueAddress;

        /// <summary>The value object id (index into the object values array)</summary>
        internal readonly int ValueId => *ValueIdAddress;

        /// <summary>The value object</summary>
        public readonly IHeapObject GetValue() => objectIdMap.GetRef(ValueId);

        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public readonly void SetValue(IHeapObject value)
        {
            if (*ValueIdAddress == ObjectIdMap.InvalidObjectId)
                *ValueIdAddress = objectIdMap.Allocate();
            objectIdMap.GetRef(*ValueIdAddress) = value;
        }

        public readonly int RecordSize => recBase.GetRecordSize(ValueLen);
        public readonly (int actualSize, int allocatedSize) RecordSizes => recBase.GetRecordSizes(ValueLen);

        public readonly int ExtraValueLen => recBase.GetFillerLen(ValueLen);

        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public readonly bool TrySetValueLength(int newValueLen)
        {
            Debug.Fail("Should not try to set ValueLength explicitly for ObjectLogRecord; value is fixed-length, and FillerLen is implicit due to potential removal of ETag/Expiration");
            return newValueLen == ValueLen;
        }

        /// <inheritdoc/>
        public override readonly string ToString() => recBase.ToString(ValueLen, ValueId.ToString());
    }
}