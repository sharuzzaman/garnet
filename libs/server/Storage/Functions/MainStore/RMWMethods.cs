﻿// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

using System;
using System.Buffers;
using System.Diagnostics;
using Garnet.common;
using Tsavorite.core;

namespace Garnet.server
{
    /// <summary>
    /// Callback functions for main store
    /// </summary>
    public readonly unsafe partial struct MainSessionFunctions : ISessionFunctions<SpanByte, SpanByte, RawStringInput, SpanByteAndMemory, long>
    {
        /// <inheritdoc />
        public bool NeedInitialUpdate(ref SpanByte key, ref RawStringInput input, ref SpanByteAndMemory output, ref RMWInfo rmwInfo)
        {
            switch (input.header.cmd)
            {
                case RespCommand.SETIFMATCH:
                case RespCommand.SETKEEPTTLXX:
                case RespCommand.SETEXXX:
                case RespCommand.PERSIST:
                case RespCommand.EXPIRE:
                case RespCommand.PEXPIRE:
                case RespCommand.EXPIREAT:
                case RespCommand.PEXPIREAT:
                case RespCommand.GETDEL:
                case RespCommand.GETEX:
                    return false;
                default:
                    if (input.header.cmd > RespCommandExtensions.LastValidCommand)
                    {
                        (IMemoryOwner<byte> Memory, int Length) outp = (output.Memory, 0);
                        var ret = functionsState.GetCustomCommandFunctions((ushort)input.header.cmd)
                            .NeedInitialUpdate(key.AsReadOnlySpan(), ref input, ref outp);
                        output.Memory = outp.Memory;
                        output.Length = outp.Length;
                        return ret;
                    }
                    return true;
            }
        }

        /// <inheritdoc />
        public bool InitialUpdater(ref SpanByte key, ref RawStringInput input, ref SpanByte value, ref SpanByteAndMemory output, ref RMWInfo rmwInfo, ref RecordInfo recordInfo)
        {
            recordInfo.ClearHasETag();
            rmwInfo.ClearExtraValueLength(ref recordInfo, ref value, value.TotalSize);

            switch (input.header.cmd)
            {
                case RespCommand.PFADD:
                    var v = value.ToPointer();
                    value.UnmarkExtraMetadata();
                    value.ShrinkSerializedLength(HyperLogLog.DefaultHLL.SparseInitialLength(ref input));
                    HyperLogLog.DefaultHLL.Init(ref input, v, value.Length);
                    *output.SpanByte.ToPointer() = 1;
                    break;

                case RespCommand.PFMERGE:
                    //srcHLL offset: [hll allocated size = 4 byte] + [hll data structure] //memcpy + 4 (skip len size)
                    var sbSrcHLL = input.parseState.GetArgSliceByRef(0).SpanByte;
                    var length = sbSrcHLL.Length;
                    var srcHLL = sbSrcHLL.ToPointer();
                    var dstHLL = value.ToPointer();

                    value.UnmarkExtraMetadata();
                    value.ShrinkSerializedLength(length);
                    Buffer.MemoryCopy(srcHLL, dstHLL, value.Length, value.Length);
                    break;

                case RespCommand.SET:
                case RespCommand.SETEXNX:
                    // Copy input to value
                    var newInputValue = input.parseState.GetArgSliceByRef(0).ReadOnlySpan;
                    var metadataSize = input.arg1 == 0 ? 0 : sizeof(long);
                    value.UnmarkExtraMetadata();
                    value.ShrinkSerializedLength(newInputValue.Length + metadataSize);
                    value.ExtraMetadata = input.arg1;
                    newInputValue.CopyTo(value.AsSpan());
                    break;

                case RespCommand.SETKEEPTTL:
                    // Copy input to value, retain metadata in value
                    var setValue = input.parseState.GetArgSliceByRef(0).ReadOnlySpan;
                    value.ShrinkSerializedLength(value.MetadataSize + setValue.Length);
                    setValue.CopyTo(value.AsSpan());
                    break;

                case RespCommand.SETKEEPTTLXX:
                case RespCommand.SETEXXX:
                case RespCommand.EXPIRE:
                case RespCommand.PEXPIRE:
                case RespCommand.EXPIREAT:
                case RespCommand.PEXPIREAT:
                case RespCommand.PERSIST:
                case RespCommand.GETDEL:
                case RespCommand.GETEX:
                    throw new Exception();

                case RespCommand.SETBIT:
                    var bOffset = input.parseState.GetLong(0);
                    var bSetVal = (byte)(input.parseState.GetArgSliceByRef(1).ReadOnlySpan[0] - '0');

                    value.UnmarkExtraMetadata();
                    value.ShrinkSerializedLength(BitmapManager.Length(bOffset));

                    // Always return 0 at initial updater because previous value was 0
                    BitmapManager.UpdateBitmap(value.ToPointer(), bOffset, bSetVal);
                    CopyDefaultResp(CmdStrings.RESP_RETURN_VAL_0, ref output);
                    break;

                case RespCommand.BITFIELD:
                    value.UnmarkExtraMetadata();
                    var bitFieldArgs = GetBitFieldArguments(ref input);
                    value.ShrinkSerializedLength(BitmapManager.LengthFromType(bitFieldArgs));
                    var (bitfieldReturnValue, overflow) = BitmapManager.BitFieldExecute(bitFieldArgs, value.ToPointer(), value.Length);
                    if (!overflow)
                        CopyRespNumber(bitfieldReturnValue, ref output);
                    else
                        CopyDefaultResp(CmdStrings.RESP_ERRNOTFOUND, ref output);
                    break;

                case RespCommand.SETRANGE:
                    var offset = input.parseState.GetInt(0);
                    var newValue = input.parseState.GetArgSliceByRef(1).ReadOnlySpan;
                    newValue.CopyTo(value.AsSpan().Slice(offset));

                    CopyValueLengthToOutput(ref value, ref output, 0);
                    break;

                case RespCommand.APPEND:
                    var appendValue = input.parseState.GetArgSliceByRef(0);

                    // Copy value to be appended to the newly allocated value buffer
                    appendValue.ReadOnlySpan.CopyTo(value.AsSpan());

                    CopyValueLengthToOutput(ref value, ref output, 0);
                    break;
                case RespCommand.INCR:
                    value.UnmarkExtraMetadata();
                    value.ShrinkSerializedLength(1); // # of digits in "1"
                    CopyUpdateNumber(1, ref value, ref output);
                    break;
                case RespCommand.INCRBY:
                    value.UnmarkExtraMetadata();
                    var fNeg = false;
                    var incrBy = input.arg1;
                    var ndigits = NumUtils.NumDigitsInLong(incrBy, ref fNeg);
                    value.ShrinkSerializedLength(ndigits + (fNeg ? 1 : 0));
                    CopyUpdateNumber(incrBy, ref value, ref output);
                    break;
                case RespCommand.DECR:
                    value.UnmarkExtraMetadata();
                    value.ShrinkSerializedLength(2); // # of digits in "-1"
                    CopyUpdateNumber(-1, ref value, ref output);
                    break;
                case RespCommand.DECRBY:
                    value.UnmarkExtraMetadata();
                    fNeg = false;
                    var decrBy = -input.arg1;
                    ndigits = NumUtils.NumDigitsInLong(decrBy, ref fNeg);
                    value.ShrinkSerializedLength(ndigits + (fNeg ? 1 : 0));
                    CopyUpdateNumber(decrBy, ref value, ref output);
                    break;
                case RespCommand.INCRBYFLOAT:
                    value.UnmarkExtraMetadata();
                    // Check if input contains a valid number
                    if (!input.parseState.TryGetDouble(0, out var incrByFloat))
                    {
                        output.SpanByte.AsSpan()[0] = (byte)OperationError.INVALID_TYPE;
                        return true;
                    }
                    CopyUpdateNumber(incrByFloat, ref value, ref output);
                    break;
                case RespCommand.SETWITHETAG:
                    metadataSize = input.arg1 == 0 ? 0 : sizeof(long);
                    value.UnmarkExtraMetadata();
                    value.ExtraMetadata = input.arg1;
                    recordInfo.SetHasETag();
                    var valueToSet = input.parseState.GetArgSliceByRef(0);
                    value.ShrinkSerializedLength(value.MetadataSize + valueToSet.Length + Constants.EtagSize);
                    // initial etag set to 0, this is a counter based etag that is incremented on change
                    *(long*)value.ToPointer() = 0;
                    valueToSet.ReadOnlySpan.CopyTo(value.AsSpan(Constants.EtagSize));
                    // Copy initial etag to output
                    CopyRespNumber(0, ref output);
                    break;
                default:
                    value.UnmarkExtraMetadata();
                    if (input.header.cmd > RespCommandExtensions.LastValidCommand)
                    {
                        var functions = functionsState.GetCustomCommandFunctions((ushort)input.header.cmd);
                        // compute metadata size for result
                        var expiration = input.arg1;
                        metadataSize = expiration switch
                        {
                            -1 => 0,
                            0 => 0,
                            _ => 8,
                        };

                        value.ShrinkSerializedLength(metadataSize + functions.GetInitialLength(ref input));
                        if (expiration > 0)
                            value.ExtraMetadata = expiration;

                        (IMemoryOwner<byte> Memory, int Length) outp = (output.Memory, 0);
                        functions.InitialUpdater(key.AsReadOnlySpan(), ref input, value.AsSpan(), ref outp, ref rmwInfo);
                        output.Memory = outp.Memory;
                        output.Length = outp.Length;
                        break;
                    }

                    // Copy input to value
                    var inputValue = input.parseState.GetArgSliceByRef(0);
                    value.ShrinkSerializedLength(inputValue.Length);
                    value.ExtraMetadata = input.arg1;
                    inputValue.ReadOnlySpan.CopyTo(value.AsSpan());

                    // Copy value to output
                    CopyTo(ref value, ref output, functionsState.memoryPool);
                    break;
            }

            rmwInfo.SetUsedValueLength(ref recordInfo, ref value, value.TotalSize);
            return true;
        }

        /// <inheritdoc />
        public void PostInitialUpdater(ref SpanByte key, ref RawStringInput input, ref SpanByte value, ref SpanByteAndMemory output, ref RMWInfo rmwInfo)
        {
            functionsState.watchVersionMap.IncrementVersion(rmwInfo.KeyHash);
            if (functionsState.appendOnlyFile != null)
            {
                input.header.SetExpiredFlag();
                WriteLogRMW(ref key, ref input, rmwInfo.Version, rmwInfo.SessionID);
            }
        }

        /// <inheritdoc />
        public bool InPlaceUpdater(ref SpanByte key, ref RawStringInput input, ref SpanByte value, ref SpanByteAndMemory output, ref RMWInfo rmwInfo, ref RecordInfo recordInfo)
        {
            if (InPlaceUpdaterWorker(ref key, ref input, ref value, ref output, ref rmwInfo, ref recordInfo))
            {
                rmwInfo.UsedValueLength = value.TotalSize;
                if (!rmwInfo.RecordInfo.Modified)
                    functionsState.watchVersionMap.IncrementVersion(rmwInfo.KeyHash);
                if (functionsState.appendOnlyFile != null)
                    WriteLogRMW(ref key, ref input, rmwInfo.Version, rmwInfo.SessionID);
                return true;
            }
            return false;
        }

        private bool InPlaceUpdaterWorker(ref SpanByte key, ref RawStringInput input, ref SpanByte value, ref SpanByteAndMemory output, ref RMWInfo rmwInfo, ref RecordInfo recordInfo)
        {
            // Expired data
            if (value.MetadataSize > 0 && input.header.CheckExpiry(value.ExtraMetadata))
            {
                rmwInfo.Action = RMWAction.ExpireAndResume;
                return false;
            }

            var cmd = input.header.cmd;
            int etagIgnoredOffset = 0;
            int etagIgnoredEnd = -1;
            long oldEtag = -1;
            if (recordInfo.ETag)
            {
                etagIgnoredOffset = Constants.EtagSize;
                etagIgnoredEnd = value.LengthWithoutMetadata;
                oldEtag = *(long*)value.ToPointer();
            }

            // First byte of input payload identifies command
            switch (cmd)
            {
                case RespCommand.SETEXNX:
                    // Check if SetGet flag is set
                    if (input.header.CheckSetGetFlag())
                    {
                        // Copy value to output for the GET part of the command.
                        CopyRespTo(ref value, ref output, etagIgnoredOffset, etagIgnoredEnd);
                    }
                    // HK TODO: Should this be updating etag?
                    return true;
                case RespCommand.SETWITHETAG:
                    // SETWITHETAG WILL OVERRIDE the existing value, unless sent with RETAIN ETAG and already has etag
                    var metadataSize = input.arg1 == 0 ? 0 : sizeof(long);

                    long etag = recordInfo.ETag && input.header.CheckRetainEtagFlag() ? oldEtag + 1 : 0;
                    var valueToSet = input.parseState.GetArgSliceByRef(0);

                    if (value.Length < valueToSet.length + metadataSize + Constants.EtagSize)
                        return false;

                    recordInfo.SetHasETag();

                    // Adjust value length that will result from this change
                    rmwInfo.ClearExtraValueLength(ref recordInfo, ref value, value.TotalSize);
                    value.ShrinkSerializedLength(metadataSize + valueToSet.Length + Constants.EtagSize);
                    rmwInfo.SetUsedValueLength(ref recordInfo, ref value, value.TotalSize);

                    if (metadataSize != 0)
                        value.ExtraMetadata = input.arg1;
                    *(long*)value.ToPointer() = etag;
                    valueToSet.ReadOnlySpan.CopyTo(value.AsSpan(Constants.EtagSize));

                    // Copy initial etag to output
                    CopyRespNumber(etag, ref output);

                    return true;
                case RespCommand.SETIFMATCH:
                    // Cancelling the operation and returning false is used to indicate no RMW because of ETAGMISMATCH
                    // In this case no etag will match the "nil" etag on a record without an etag
                    if (!recordInfo.ETag)
                    {
                        rmwInfo.Action = RMWAction.CancelOperation;
                        return false;
                    }

                    var prevEtag = *(long*)value.ToPointer();
                    var etagFromClient = input.parseState.GetLong(1);

                    if (prevEtag != etagFromClient)
                    {
                        // Cancelling the operation and returning false is used to indicate ETAGMISMATCH
                        rmwInfo.Action = RMWAction.CancelOperation;
                        return false;
                    }

                    // Need Copy update if no space for new value
                    var inputValue = input.parseState.GetArgSliceByRef(0);
                    if (value.Length - Constants.EtagSize < inputValue.length)
                        return false;

                    // Increment the ETag
                    long newEtag = prevEtag + 1;

                    // Adjust value length if user shrinks it, how to get rid of spanbyte infront
                    value.ShrinkSerializedLength(inputValue.Length + Constants.EtagSize);
                    rmwInfo.SetUsedValueLength(ref recordInfo, ref value, value.TotalSize);
                    rmwInfo.ClearExtraValueLength(ref recordInfo, ref value, value.TotalSize);

                    *(long*)value.ToPointer() = newEtag;
                    inputValue.ReadOnlySpan.CopyTo(value.AsSpan(Constants.EtagSize));

                    CopyRespToWithInput(ref input, ref value, ref output, false, 0, -1, true);

                    // early return since we already updated the ETag
                    return true;
                case RespCommand.SET:
                case RespCommand.SETEXXX:
                    // If user wants to retain etag and the data has etag, we need to silently update/keep the etag, but the response should not be written with the etag
                    var nextUpdateEtagOffset = etagIgnoredOffset;
                    var nextUpdateEtagIgnoredEnd = etagIgnoredEnd;
                    if (!input.header.CheckRetainEtagFlag())
                    {
                        // if the user did not explictly asked for retaining the etag we need to ignore the etag even if it existed on the previous record
                        nextUpdateEtagOffset = 0;
                        nextUpdateEtagIgnoredEnd = -1;
                        recordInfo.ClearHasETag();
                    }

                    var setValue = input.parseState.GetArgSliceByRef(0);

                    // Need CU if no space for new value
                    metadataSize = input.arg1 == 0 ? 0 : sizeof(long);
                    if (setValue.Length + metadataSize > value.Length - etagIgnoredOffset)
                        return false;

                    // Check if SetGet flag is set
                    if (input.header.CheckSetGetFlag())
                    {
                        // Copy value to output for the GET part of the command.
                        CopyRespTo(ref value, ref output, etagIgnoredOffset, etagIgnoredEnd);
                    }

                    // Adjust value length
                    rmwInfo.ClearExtraValueLength(ref recordInfo, ref value, value.TotalSize);
                    value.UnmarkExtraMetadata();
                    value.ShrinkSerializedLength(setValue.Length + metadataSize + nextUpdateEtagOffset);

                    // Copy input to value
                    value.ExtraMetadata = input.arg1;
                    setValue.ReadOnlySpan.CopyTo(value.AsSpan(nextUpdateEtagOffset));
                    rmwInfo.SetUsedValueLength(ref recordInfo, ref value, value.TotalSize);

                    break;
                case RespCommand.SETKEEPTTLXX:
                case RespCommand.SETKEEPTTL:
                    // respect etag retention only if input header tells you to explicitly
                    if (!input.header.CheckRetainEtagFlag())
                    {
                        etagIgnoredOffset = 0;
                        etagIgnoredEnd = -1;
                        recordInfo.ClearHasETag();
                    }

                    setValue = input.parseState.GetArgSliceByRef(0);
                    // Need CU if no space for new value
                    if (setValue.Length + value.MetadataSize > value.Length - etagIgnoredOffset)
                        return false;

                    // Check if SetGet flag is set
                    if (input.header.CheckSetGetFlag())
                    {
                        // Copy value to output for the GET part of the command.
                        CopyRespTo(ref value, ref output, etagIgnoredOffset, etagIgnoredEnd);
                    }

                    // Adjust value length
                    rmwInfo.ClearExtraValueLength(ref recordInfo, ref value, value.TotalSize);
                    value.ShrinkSerializedLength(setValue.Length + value.MetadataSize + etagIgnoredOffset);

                    // Copy input to value
                    setValue.ReadOnlySpan.CopyTo(value.AsSpan(etagIgnoredOffset));
                    rmwInfo.SetUsedValueLength(ref recordInfo, ref value, value.TotalSize);
                    // etag is not updated
                    return true;

                case RespCommand.PEXPIRE:
                case RespCommand.EXPIRE:
                    // doesn't update etag    
                    var expiryExists = value.MetadataSize > 0;

                    var expiryValue = input.parseState.GetLong(0);
                    var tsExpiry = input.header.cmd == RespCommand.EXPIRE
                        ? TimeSpan.FromSeconds(expiryValue)
                        : TimeSpan.FromMilliseconds(expiryValue);
                    var expiryTicks = DateTimeOffset.UtcNow.Ticks + tsExpiry.Ticks;
                    var expireOption = (ExpireOption)input.arg1;

                    if (!EvaluateExpireInPlace(expireOption, expiryExists, expiryTicks, ref value, ref output))
                        return false;
                    return true; ;
                case RespCommand.PEXPIREAT:
                case RespCommand.EXPIREAT:
                    expiryExists = value.MetadataSize > 0;

                    var expiryTimestamp = input.parseState.GetLong(0);
                    expiryTicks = input.header.cmd == RespCommand.PEXPIREAT
                        ? ConvertUtils.UnixTimestampInMillisecondsToTicks(expiryTimestamp)
                        : ConvertUtils.UnixTimestampInSecondsToTicks(expiryTimestamp);
                    expireOption = (ExpireOption)input.arg1;

                    if (!EvaluateExpireInPlace(expireOption, expiryExists, expiryTicks, ref value, ref output))
                        return false;
                    return true;

                case RespCommand.PERSIST:
                    if (value.MetadataSize != 0)
                    {
                        rmwInfo.ClearExtraValueLength(ref recordInfo, ref value, value.TotalSize);
                        value.AsSpan().CopyTo(value.AsSpanWithMetadata());
                        value.ShrinkSerializedLength(value.Length - value.MetadataSize);
                        value.UnmarkExtraMetadata();
                        rmwInfo.SetUsedValueLength(ref recordInfo, ref value, value.TotalSize);
                        output.SpanByte.AsSpan()[0] = 1;
                    }
                    // does not update etag
                    return true;

                case RespCommand.INCR:
                    if (!TryInPlaceUpdateNumber(ref value, ref output, ref rmwInfo, ref recordInfo, input: 1, etagIgnoredOffset))
                        return false;
                    break;

                case RespCommand.DECR:
                    if (!TryInPlaceUpdateNumber(ref value, ref output, ref rmwInfo, ref recordInfo, input: -1, etagIgnoredOffset))
                        return false;
                    break;

                case RespCommand.INCRBY:
                    // Check if input contains a valid number
                    var incrBy = input.arg1;
                    if (!TryInPlaceUpdateNumber(ref value, ref output, ref rmwInfo, ref recordInfo, input: incrBy, etagIgnoredOffset))
                        return false;
                    break;

                case RespCommand.DECRBY:
                    var decrBy = input.arg1;
                    if (!TryInPlaceUpdateNumber(ref value, ref output, ref rmwInfo, ref recordInfo, input: -decrBy, etagIgnoredOffset))
                        return false;
                    break;

                case RespCommand.INCRBYFLOAT:
                    // Check if input contains a valid number
                    if (!input.parseState.TryGetDouble(0, out var incrByFloat))
                    {
                        output.SpanByte.AsSpan()[0] = (byte)OperationError.INVALID_TYPE;
                        return true;
                    }
                    if (!TryInPlaceUpdateNumber(ref value, ref output, ref rmwInfo, ref recordInfo, incrByFloat, etagIgnoredOffset))
                        return false;
                    break;

                case RespCommand.SETBIT:
                    var v = value.ToPointer() + etagIgnoredOffset;
                    var bOffset = input.parseState.GetLong(0);
                    var bSetVal = (byte)(input.parseState.GetArgSliceByRef(1).ReadOnlySpan[0] - '0');

                    if (!BitmapManager.IsLargeEnough(value.Length - etagIgnoredOffset, bOffset)) return false;

                    rmwInfo.ClearExtraValueLength(ref recordInfo, ref value, value.TotalSize);
                    value.UnmarkExtraMetadata();
                    value.ShrinkSerializedLength(value.Length + value.MetadataSize);
                    rmwInfo.SetUsedValueLength(ref recordInfo, ref value, value.TotalSize);

                    var oldValSet = BitmapManager.UpdateBitmap(v, bOffset, bSetVal);
                    if (oldValSet == 0)
                        CopyDefaultResp(CmdStrings.RESP_RETURN_VAL_0, ref output);
                    else
                        CopyDefaultResp(CmdStrings.RESP_RETURN_VAL_1, ref output);
                    break;
                case RespCommand.BITFIELD:
                    var bitFieldArgs = GetBitFieldArguments(ref input);
                    v = value.ToPointer() + etagIgnoredOffset;

                    if (!BitmapManager.IsLargeEnoughForType(bitFieldArgs, value.Length - etagIgnoredOffset))
                        return false;

                    rmwInfo.ClearExtraValueLength(ref recordInfo, ref value, value.TotalSize);
                    value.UnmarkExtraMetadata();
                    value.ShrinkSerializedLength(value.Length + value.MetadataSize);
                    rmwInfo.SetUsedValueLength(ref recordInfo, ref value, value.TotalSize);

                    var (bitfieldReturnValue, overflow) = BitmapManager.BitFieldExecute(bitFieldArgs, v, value.Length - etagIgnoredOffset);

                    if (!overflow)
                        CopyRespNumber(bitfieldReturnValue, ref output);
                    else
                        CopyDefaultResp(CmdStrings.RESP_ERRNOTFOUND, ref output);
                    break;
                case RespCommand.PFADD:
                    v = value.ToPointer();

                    if (!HyperLogLog.DefaultHLL.IsValidHYLL(v, value.Length))
                    {
                        *output.SpanByte.ToPointer() = (byte)0xFF;
                        return true;
                    }

                    var updated = false;
                    rmwInfo.ClearExtraValueLength(ref recordInfo, ref value, value.TotalSize);
                    value.ShrinkSerializedLength(value.Length + value.MetadataSize);
                    var result = HyperLogLog.DefaultHLL.Update(ref input, v, value.Length, ref updated);
                    rmwInfo.SetUsedValueLength(ref recordInfo, ref value, value.TotalSize);

                    if (result)
                        *output.SpanByte.ToPointer() = updated ? (byte)1 : (byte)0;
                    return result;

                case RespCommand.PFMERGE:
                    //srcHLL offset: [hll allocated size = 4 byte] + [hll data structure] //memcpy +4 (skip len size)
                    var srcHLL = input.parseState.GetArgSliceByRef(0).SpanByte.ToPointer();
                    var dstHLL = value.ToPointer();

                    if (!HyperLogLog.DefaultHLL.IsValidHYLL(dstHLL, value.Length))
                    {
                        //InvalidType                                                
                        *(long*)output.SpanByte.ToPointer() = -1;
                        return true;
                    }
                    rmwInfo.ClearExtraValueLength(ref recordInfo, ref value, value.TotalSize);
                    value.ShrinkSerializedLength(value.Length + value.MetadataSize);
                    rmwInfo.SetUsedValueLength(ref recordInfo, ref value, value.TotalSize);
                    return HyperLogLog.DefaultHLL.TryMerge(srcHLL, dstHLL, value.Length);
                case RespCommand.SETRANGE:
                    var offset = input.parseState.GetInt(0);
                    var newValue = input.parseState.GetArgSliceByRef(1).ReadOnlySpan;

                    if (newValue.Length + offset > value.LengthWithoutMetadata - etagIgnoredOffset)
                        return false;

                    newValue.CopyTo(value.AsSpan(etagIgnoredOffset).Slice(offset));

                    CopyValueLengthToOutput(ref value, ref output, etagIgnoredOffset);
                    break;

                case RespCommand.GETDEL:
                    // Copy value to output for the GET part of the command.
                    // Then, set ExpireAndStop action to delete the record.
                    CopyRespTo(ref value, ref output, etagIgnoredOffset, etagIgnoredEnd);
                    rmwInfo.Action = RMWAction.ExpireAndStop;
                    return false;

                case RespCommand.GETEX:
                    CopyRespTo(ref value, ref output, etagIgnoredOffset, etagIgnoredEnd);

                    if (input.arg1 > 0)
                    {
                        byte* pbOutput = stackalloc byte[ObjectOutputHeader.Size];
                        var _output = new SpanByteAndMemory(SpanByte.FromPinnedPointer(pbOutput, ObjectOutputHeader.Size));

                        var newExpiry = input.arg1;
                        return EvaluateExpireInPlace(ExpireOption.None, expiryExists: value.MetadataSize > 0, newExpiry, ref value, ref _output);
                    }

                    if (input.parseState.Count > 0)
                    {
                        var persist = input.parseState.GetArgSliceByRef(0).ReadOnlySpan
                            .EqualsUpperCaseSpanIgnoringCase(CmdStrings.PERSIST);

                        if (persist) // Persist the key
                        {
                            rmwInfo.ClearExtraValueLength(ref recordInfo, ref value, value.TotalSize);
                            value.AsSpan().CopyTo(value.AsSpanWithMetadata());
                            value.ShrinkSerializedLength(value.Length - value.MetadataSize);
                            value.UnmarkExtraMetadata();
                            rmwInfo.SetUsedValueLength(ref recordInfo, ref value, value.TotalSize);
                            return true;
                        }
                    }

                    return true;

                case RespCommand.APPEND:
                    // If nothing to append, can avoid copy update.
                    var appendSize = input.parseState.GetArgSliceByRef(0).Length;

                    if (appendSize == 0)
                    {
                        CopyValueLengthToOutput(ref value, ref output, etagIgnoredOffset);
                        return true;
                    }

                    return false;
                default:
                    if (cmd > RespCommandExtensions.LastValidCommand)
                    {
                        var functions = functionsState.GetCustomCommandFunctions((ushort)cmd);
                        var expiration = input.arg1;
                        if (expiration == -1)
                        {
                            // there is existing metadata, but we want to clear it.
                            // we remove metadata, shift the value, shrink length
                            if (value.ExtraMetadata > 0)
                            {
                                var oldValue = value.AsReadOnlySpan();
                                rmwInfo.ClearExtraValueLength(ref recordInfo, ref value, value.TotalSize);
                                value.UnmarkExtraMetadata();
                                oldValue.CopyTo(value.AsSpan());
                                value.ShrinkSerializedLength(oldValue.Length);
                                rmwInfo.SetUsedValueLength(ref recordInfo, ref value, value.TotalSize);
                            }
                        }
                        else if (expiration > 0)
                        {
                            // there is no existing metadata, but we want to add it. we cannot do in place update.
                            if (value.ExtraMetadata == 0) return false;
                            // set expiration to the specific value
                            value.ExtraMetadata = expiration;
                        }

                        var valueLength = value.LengthWithoutMetadata;
                        (IMemoryOwner<byte> Memory, int Length) outp = (output.Memory, 0);
                        var ret = functions.InPlaceUpdater(key.AsReadOnlySpan(), ref input, value.AsSpan(), ref valueLength, ref outp, ref rmwInfo);
                        Debug.Assert(valueLength <= value.LengthWithoutMetadata);

                        // Adjust value length if user shrinks it
                        if (valueLength < value.LengthWithoutMetadata)
                        {
                            rmwInfo.ClearExtraValueLength(ref recordInfo, ref value, value.TotalSize);
                            value.ShrinkSerializedLength(valueLength + value.MetadataSize);
                            rmwInfo.SetUsedValueLength(ref recordInfo, ref value, value.TotalSize);
                        }

                        output.Memory = outp.Memory;
                        output.Length = outp.Length;
                        return ret;
                    }
                    throw new GarnetException("Unsupported operation on input");
            }

            // increment the Etag transparently if in place update happened
            if (recordInfo.ETag && rmwInfo.Action == RMWAction.Default)
            {
                *(long*)value.ToPointer() = oldEtag + 1;
            }

            return true;
        }

        /// <inheritdoc />
        public bool NeedCopyUpdate(ref SpanByte key, ref RawStringInput input, ref SpanByte oldValue, ref SpanByteAndMemory output, ref RMWInfo rmwInfo)
        {
            int etagIgnoredOffset = 0;
            int etagIgnoredEnd = -1;
            if (rmwInfo.RecordInfo.ETag)
            {
                etagIgnoredOffset = sizeof(long);
                etagIgnoredEnd = oldValue.LengthWithoutMetadata;
            }

            switch (input.header.cmd)
            {
                case RespCommand.SETIFMATCH:
                    if (!rmwInfo.RecordInfo.ETag)
                        return false;

                    var etagToCheckWith = input.parseState.GetLong(1);
                    long existingEtag = *(long*)oldValue.ToPointer();
                    if (existingEtag != etagToCheckWith)
                    {
                        // cancellation and return false indicates ETag mismatch
                        rmwInfo.Action = RMWAction.CancelOperation;
                        return false;
                    }
                    return true;
                case RespCommand.SETEXNX:
                    // Expired data, return false immediately
                    // ExpireAndResume ensures that we set as new value, since it does not exist
                    if (oldValue.MetadataSize > 0 && input.header.CheckExpiry(oldValue.ExtraMetadata))
                    {
                        rmwInfo.Action = RMWAction.ExpireAndResume;
                        return false;
                    }
                    // Check if SetGet flag is set
                    if (input.header.CheckSetGetFlag())
                    {
                        // Copy value to output for the GET part of the command.
                        CopyRespTo(ref oldValue, ref output, etagIgnoredOffset, etagIgnoredEnd);
                    }
                    return false;
                case RespCommand.SETEXXX:
                    // Expired data, return false immediately so we do not set, since it does not exist
                    // ExpireAndStop ensures that caller sees a NOTFOUND status
                    if (oldValue.MetadataSize > 0 && input.header.CheckExpiry(oldValue.ExtraMetadata))
                    {
                        rmwInfo.Action = RMWAction.ExpireAndStop;
                        return false;
                    }
                    return true;
                default:
                    if (input.header.cmd > RespCommandExtensions.LastValidCommand)
                    {
                        (IMemoryOwner<byte> Memory, int Length) outp = (output.Memory, 0);
                        var ret = functionsState.GetCustomCommandFunctions((ushort)input.header.cmd)
                            .NeedCopyUpdate(key.AsReadOnlySpan(), ref input, oldValue.AsReadOnlySpan(etagIgnoredOffset), ref outp);
                        output.Memory = outp.Memory;
                        output.Length = outp.Length;
                        return ret;

                    }
                    return true;
            }
        }

        /// <inheritdoc />
        public bool CopyUpdater(ref SpanByte key, ref RawStringInput input, ref SpanByte oldValue, ref SpanByte newValue, ref SpanByteAndMemory output, ref RMWInfo rmwInfo, ref RecordInfo recordInfo)
        {
            // Expired data
            if (oldValue.MetadataSize > 0 && input.header.CheckExpiry(oldValue.ExtraMetadata))
            {
                rmwInfo.Action = RMWAction.ExpireAndResume;
                return false;
            }

            rmwInfo.ClearExtraValueLength(ref recordInfo, ref newValue, newValue.TotalSize);

            var cmd = input.header.cmd;
            var shouldUpdateEtag = true;
            int etagIgnoredOffset = 0;
            int etagIgnoredEnd = -1;
            long oldEtag = -1;
            if (recordInfo.ETag)
            {
                etagIgnoredEnd = oldValue.LengthWithoutMetadata;
                etagIgnoredOffset = Constants.EtagSize;
                oldEtag = *(long*)oldValue.ToPointer();
            }

            switch (cmd)
            {
                case RespCommand.SETWITHETAG:
                    recordInfo.SetHasETag();
                    var metadataSize = input.arg1 == 0 ? 0 : sizeof(long);
                    if (metadataSize != 0)
                        newValue.ExtraMetadata = input.arg1;

                    long etag = input.header.CheckRetainEtagFlag() && recordInfo.ETag ? oldEtag + 1 : 0;
                    var dest = newValue.AsSpan(Constants.EtagSize);
                    var src = input.parseState.GetArgSliceByRef(0).ReadOnlySpan;

                    Debug.Assert(src.Length + Constants.EtagSize == newValue.Length);

                    src.CopyTo(dest);

                    CopyRespNumber(etag, ref output);
                    break;

                case RespCommand.SETIFMATCH:
                    Debug.Assert(recordInfo.ETag, "We should never be able to CU for ETag command on non-etag data.");

                    // avoids double update at the end
                    shouldUpdateEtag = false;
                    *(long*)newValue.ToPointer() = oldEtag + 1;

                    // Copy input to value
                    dest = newValue.AsSpan(Constants.EtagSize);
                    src = input.parseState.GetArgSliceByRef(0).ReadOnlySpan;

                    Debug.Assert(src.Length + Constants.EtagSize == newValue.Length);

                    src.CopyTo(dest);

                    // Write Etag and Val back to Client
                    CopyRespToWithInput(ref input, ref newValue, ref output, false, 0, -1, hasEtagInVal: true);
                    break;

                case RespCommand.SET:
                case RespCommand.SETEXXX:
                    var nextUpdateEtagOffset = etagIgnoredOffset;
                    var nextUpdateEtagIgnoredEnd = etagIgnoredEnd;
                    if (!input.header.CheckRetainEtagFlag())
                    {
                        // if the user did not explictly asked for retaining the etag we need to ignore the etag if it existed on the previous record
                        nextUpdateEtagOffset = 0;
                        nextUpdateEtagIgnoredEnd = -1;
                        recordInfo.ClearHasETag();
                    }

                    // Check if SetGet flag is set
                    if (input.header.CheckSetGetFlag())
                    {
                        // Copy value to output for the GET part of the command.
                        CopyRespTo(ref oldValue, ref output, etagIgnoredOffset, etagIgnoredEnd);
                    }

                    // Copy input to value
                    var newInputValue = input.parseState.GetArgSliceByRef(0).ReadOnlySpan;
                    metadataSize = input.arg1 == 0 ? 0 : sizeof(long);

                    // new value when allocated should have 8 bytes more if the previous record had etag and the cmd was not SETEXXX
                    Debug.Assert(newInputValue.Length + metadataSize + etagIgnoredOffset == newValue.Length);

                    newValue.ExtraMetadata = input.arg1;
                    newInputValue.CopyTo(newValue.AsSpan(nextUpdateEtagOffset));
                    break;

                case RespCommand.SETKEEPTTLXX:
                case RespCommand.SETKEEPTTL:
                    nextUpdateEtagOffset = etagIgnoredOffset;
                    nextUpdateEtagIgnoredEnd = etagIgnoredEnd;
                    if (input.header.CheckRetainEtagFlag())
                    {
                        // if the user did not explictly asked for retaining the etag we need to ignore the etag if it existed on the previous record
                        nextUpdateEtagOffset = 0;
                        nextUpdateEtagIgnoredEnd = -1;
                    }

                    var setValue = input.parseState.GetArgSliceByRef(0).ReadOnlySpan;
                    Debug.Assert(oldValue.MetadataSize + setValue.Length == newValue.Length - etagIgnoredOffset);

                    // Check if SetGet flag is set
                    if (input.header.CheckSetGetFlag())
                    {
                        // Copy value to output for the GET part of the command.
                        CopyRespTo(ref oldValue, ref output, etagIgnoredOffset, etagIgnoredEnd);
                    }

                    // Copy input to value, retain metadata of oldValue
                    newValue.ExtraMetadata = oldValue.ExtraMetadata;
                    setValue.CopyTo(newValue.AsSpan(nextUpdateEtagOffset));
                    break;

                case RespCommand.EXPIRE:
                case RespCommand.PEXPIRE:
                    shouldUpdateEtag = false;

                    var expiryExists = oldValue.MetadataSize > 0;

                    var expiryValue = input.parseState.GetLong(0);
                    var tsExpiry = input.header.cmd == RespCommand.EXPIRE
                        ? TimeSpan.FromSeconds(expiryValue)
                        : TimeSpan.FromMilliseconds(expiryValue);
                    var expiryTicks = DateTimeOffset.UtcNow.Ticks + tsExpiry.Ticks;
                    var expireOption = (ExpireOption)input.arg1;

                    EvaluateExpireCopyUpdate(expireOption, expiryExists, expiryTicks, ref oldValue, ref newValue, ref output);
                    break;

                case RespCommand.PEXPIREAT:
                case RespCommand.EXPIREAT:
                    expiryExists = oldValue.MetadataSize > 0;
                    shouldUpdateEtag = false;

                    var expiryTimestamp = input.parseState.GetLong(0);
                    expiryTicks = input.header.cmd == RespCommand.PEXPIREAT
                        ? ConvertUtils.UnixTimestampInMillisecondsToTicks(expiryTimestamp)
                        : ConvertUtils.UnixTimestampInSecondsToTicks(expiryTimestamp);
                    expireOption = (ExpireOption)input.arg1;

                    EvaluateExpireCopyUpdate(expireOption, expiryExists, expiryTicks, ref oldValue, ref newValue, ref output);
                    break;

                case RespCommand.PERSIST:
                    shouldUpdateEtag = false;
                    oldValue.AsReadOnlySpan().CopyTo(newValue.AsSpan());
                    if (oldValue.MetadataSize != 0)
                    {
                        newValue.AsSpan().CopyTo(newValue.AsSpanWithMetadata());
                        newValue.ShrinkSerializedLength(newValue.Length - newValue.MetadataSize);
                        newValue.UnmarkExtraMetadata();
                        output.SpanByte.AsSpan()[0] = 1;
                    }
                    break;

                case RespCommand.INCR:
                    TryCopyUpdateNumber(ref oldValue, ref newValue, ref output, input: 1, etagIgnoredOffset);
                    break;

                case RespCommand.DECR:
                    TryCopyUpdateNumber(ref oldValue, ref newValue, ref output, input: -1, etagIgnoredOffset);
                    break;

                case RespCommand.INCRBY:
                    var incrBy = input.arg1;
                    TryCopyUpdateNumber(ref oldValue, ref newValue, ref output, input: incrBy, etagIgnoredOffset);
                    break;

                case RespCommand.DECRBY:
                    var decrBy = input.arg1;
                    TryCopyUpdateNumber(ref oldValue, ref newValue, ref output, input: -decrBy, etagIgnoredOffset);
                    break;

                case RespCommand.INCRBYFLOAT:
                    // Check if input contains a valid number
                    if (!input.parseState.TryGetDouble(0, out var incrByFloat))
                    {
                        // Move to tail of the log
                        oldValue.CopyTo(ref newValue);
                        break;
                    }
                    TryCopyUpdateNumber(ref oldValue, ref newValue, ref output, input: incrByFloat, etagIgnoredOffset);
                    break;

                case RespCommand.SETBIT:
                    var bOffset = input.parseState.GetLong(0);
                    var bSetVal = (byte)(input.parseState.GetArgSliceByRef(1).ReadOnlySpan[0] - '0');
                    Buffer.MemoryCopy(oldValue.ToPointer(), newValue.ToPointer(), newValue.Length, oldValue.Length);
                    var oldValSet = BitmapManager.UpdateBitmap(newValue.ToPointer(), bOffset, bSetVal);
                    if (oldValSet == 0)
                        CopyDefaultResp(CmdStrings.RESP_RETURN_VAL_0, ref output);
                    else
                        CopyDefaultResp(CmdStrings.RESP_RETURN_VAL_1, ref output);
                    break;

                case RespCommand.BITFIELD:
                    var bitFieldArgs = GetBitFieldArguments(ref input);
                    Buffer.MemoryCopy(oldValue.ToPointer() + etagIgnoredOffset, newValue.ToPointer() + etagIgnoredOffset, newValue.Length - etagIgnoredOffset, oldValue.Length - etagIgnoredOffset);
                    var (bitfieldReturnValue, overflow) = BitmapManager.BitFieldExecute(bitFieldArgs, newValue.ToPointer() + etagIgnoredOffset, newValue.Length - etagIgnoredOffset);

                    if (!overflow)
                        CopyRespNumber(bitfieldReturnValue, ref output);
                    else
                        CopyDefaultResp(CmdStrings.RESP_ERRNOTFOUND, ref output);
                    break;

                case RespCommand.PFADD:
                    var updated = false;
                    var newValPtr = newValue.ToPointer();
                    var oldValPtr = oldValue.ToPointer();

                    if (newValue.Length != oldValue.Length)
                        updated = HyperLogLog.DefaultHLL.CopyUpdate(ref input, oldValPtr, newValPtr, newValue.Length);
                    else
                    {
                        Buffer.MemoryCopy(oldValPtr, newValPtr, newValue.Length, oldValue.Length);
                        HyperLogLog.DefaultHLL.Update(ref input, newValPtr, newValue.Length, ref updated);
                    }
                    *output.SpanByte.ToPointer() = updated ? (byte)1 : (byte)0;
                    break;

                case RespCommand.PFMERGE:
                    //srcA offset: [hll allocated size = 4 byte] + [hll data structure] //memcpy +4 (skip len size)
                    var srcHLLPtr = input.parseState.GetArgSliceByRef(0).SpanByte.ToPointer(); // HLL merging from
                    var oldDstHLLPtr = oldValue.ToPointer(); // original HLL merging to (too small to hold its data plus srcA)
                    var newDstHLLPtr = newValue.ToPointer(); // new HLL merging to (large enough to hold srcA and srcB

                    HyperLogLog.DefaultHLL.CopyUpdateMerge(srcHLLPtr, oldDstHLLPtr, newDstHLLPtr, oldValue.Length, newValue.Length);
                    break;

                case RespCommand.SETRANGE:
                    var offset = input.parseState.GetInt(0);
                    oldValue.CopyTo(ref newValue);

                    newInputValue = input.parseState.GetArgSliceByRef(1).ReadOnlySpan;
                    newInputValue.CopyTo(newValue.AsSpan(etagIgnoredOffset).Slice(offset));

                    CopyValueLengthToOutput(ref newValue, ref output, etagIgnoredOffset);
                    break;

                case RespCommand.GETDEL:
                    // Copy value to output for the GET part of the command.
                    // Then, set ExpireAndStop action to delete the record.
                    CopyRespTo(ref oldValue, ref output, etagIgnoredOffset, etagIgnoredEnd);
                    rmwInfo.Action = RMWAction.ExpireAndStop;
                    return false;

                case RespCommand.GETEX:
                    CopyRespTo(ref oldValue, ref output, etagIgnoredOffset, etagIgnoredEnd);

                    if (input.arg1 > 0)
                    {
                        Debug.Assert(newValue.Length == oldValue.Length + sizeof(long));
                        byte* pbOutput = stackalloc byte[ObjectOutputHeader.Size];
                        var _output = new SpanByteAndMemory(SpanByte.FromPinnedPointer(pbOutput, ObjectOutputHeader.Size));
                        var newExpiry = input.arg1;
                        EvaluateExpireCopyUpdate(ExpireOption.None, expiryExists: oldValue.MetadataSize > 0, newExpiry, ref oldValue, ref newValue, ref _output);
                    }

                    oldValue.AsReadOnlySpan().CopyTo(newValue.AsSpan());

                    if (input.parseState.Count > 0)
                    {
                        var persist = input.parseState.GetArgSliceByRef(0).ReadOnlySpan
                            .EqualsUpperCaseSpanIgnoringCase(CmdStrings.PERSIST);

                        if (persist) // Persist the key
                        {
                            newValue.AsSpan().CopyTo(newValue.AsSpanWithMetadata());
                            newValue.ShrinkSerializedLength(newValue.Length - newValue.MetadataSize);
                            newValue.UnmarkExtraMetadata();
                        }
                    }
                    break;

                case RespCommand.APPEND:
                    // Copy any existing value with metadata to thew new value
                    oldValue.CopyTo(ref newValue);

                    var appendValue = input.parseState.GetArgSliceByRef(0);

                    // Append the new value with the client input at the end of the old data
                    appendValue.ReadOnlySpan.CopyTo(newValue.AsSpan().Slice(oldValue.LengthWithoutMetadata));

                    CopyValueLengthToOutput(ref newValue, ref output, etagIgnoredOffset);
                    break;

                default:
                    if (input.header.cmd > RespCommandExtensions.LastValidCommand)
                    {
                        var functions = functionsState.GetCustomCommandFunctions((ushort)input.header.cmd);
                        var expiration = input.arg1;
                        if (expiration == 0)
                        {
                            // We want to retain the old metadata
                            newValue.ExtraMetadata = oldValue.ExtraMetadata;
                        }
                        else if (expiration > 0)
                        {
                            // We want to add the given expiration
                            newValue.ExtraMetadata = expiration;
                        }

                        (IMemoryOwner<byte> Memory, int Length) outp = (output.Memory, 0);

                        var ret = functions
                            .CopyUpdater(key.AsReadOnlySpan(), ref input, oldValue.AsReadOnlySpan(etagIgnoredOffset), newValue.AsSpan(etagIgnoredOffset), ref outp, ref rmwInfo);
                        output.Memory = outp.Memory;
                        output.Length = outp.Length;
                        return ret;
                    }
                    throw new GarnetException("Unsupported operation on input");
            }

            rmwInfo.SetUsedValueLength(ref recordInfo, ref newValue, newValue.TotalSize);

            // increment the Etag transparently if in place update happened
            if (recordInfo.ETag && shouldUpdateEtag)
            {
                *(long*)newValue.ToPointer() = oldEtag + 1;
            }

            return true;
        }

        /// <inheritdoc />
        public bool PostCopyUpdater(ref SpanByte key, ref RawStringInput input, ref SpanByte oldValue, ref SpanByte newValue, ref SpanByteAndMemory output, ref RMWInfo rmwInfo)
        {
            functionsState.watchVersionMap.IncrementVersion(rmwInfo.KeyHash);
            if (functionsState.appendOnlyFile != null)
                WriteLogRMW(ref key, ref input, rmwInfo.Version, rmwInfo.SessionID);
            return true;
        }
    }
}