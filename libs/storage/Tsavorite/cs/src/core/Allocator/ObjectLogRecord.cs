﻿// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

using System.Diagnostics;

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
    public unsafe struct ObjectLogRecord(long physicalAddress)
    {
        internal readonly LogRecordBase recBase = new(physicalAddress);
        KeyOverflowAllocator keyAlloc;
        ObjectIdMap objectIdMap;

        private const int ValueLen = ObjectIdMap.ObjectIdSize;

        public ObjectLogRecord(long physicalAddress, KeyOverflowAllocator keyAlloc, ObjectIdMap objectIdMap = null)
            : this(physicalAddress)
        {
            // This overload is primarily used in passing to IObjectSessionFunctions callbacks; the primary constructor is just for record parsing.
            this.keyAlloc = keyAlloc;
            this.objectIdMap = objectIdMap;
        }

        internal readonly int* ValueIdAddress => (int*)recBase.ValueAddress;

        /// <summary>The value object id (index into the object values array)</summary>
        internal readonly int ValueId => *ValueIdAddress;

        public readonly IHeapObject GetValue() => objectIdMap.GetRef(ValueId);
        public readonly void SetValue(IHeapObject value)
        {
            if (*ValueIdAddress == ObjectIdMap.InvalidObjectId)
                *ValueIdAddress = objectIdMap.Allocate();
            objectIdMap.GetRef(*ValueIdAddress) = value;
        }

        public readonly int RecordSize => recBase.GetRecordSize(ValueLen);
        public readonly (int actualSize, int allocatedSize) RecordSizes => recBase.GetRecordSizes(ValueLen);

        public readonly int ExtraValueLen => recBase.GetFillerLen(ValueLen);

        public readonly bool TrySetValueLength(int newValueLen)
        {
            Debug.Fail("Should not try to set ValueLength explicitly for ObjectLogRecord; value is fixed-length, and FillerLen is implicit due to potential removal of ETag/Expiration");
            return newValueLen == ValueLen;
        }

        /// <inheritdoc/>
        public override readonly string ToString() => recBase.ToString(ValueLen, ValueId.ToString());
    }
}