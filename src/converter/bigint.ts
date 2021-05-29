/**
 * Handle int64/uint64 as BigInt instead of Long.
 * Wait for native support of Bigint in protobufjs (https://github.com/protobufjs/protobuf.js/pull/1557)
 */
/* eslint-disable max-statements, max-depth */
import Long from 'long';

// see: https://github.com/protobufjs/protobuf.js/blob/e24adf27523ffbc9857fc735280ec2d21585684a/src/util/longbits.js#L123
export function longToBigInt({ unsigned, low, high }: Long) {
  if (unsigned) {
    const result = BigInt(low >>> 0) + (BigInt(high >>> 0) << 32n);
    return result;
  }

  if (high >>> 31) {
    low = ~low + 1 >>> 0;
    high = ~high >>> 0;
    if (!low) {
      high = high + 1 >>> 0;
    }
    return -(BigInt(low) + (BigInt(high) << 32n));
  }

  return BigInt(low >>> 0) + (BigInt(high >>> 0) << 32n);
}

// see: https://github.com/protobufjs/protobuf.js/blob/e24adf27523ffbc9857fc735280ec2d21585684a/src/util/longbits.js#L50
export function bigIntToLong(value: bigint, { unsigned = false } = {}) {
  const TWO_32 = 4294967296n;
  const negative = value < 0;
  if (negative) {
    value = -value;
  }
  let hi = Number(value >> 32n) | 0;
  let lo = Number(value - (BigInt(hi) << 32n)) | 0;

  if (negative) {
    hi = ~hi >>> 0;
    lo = ~lo >>> 0;
    if (++lo > TWO_32) {
      lo = 0;
      if (++hi > TWO_32)
        hi = 0;
    }
  }

  return new Long(lo, hi, unsigned);
}
