/**
 * Date types convertion helpers.
 */
/* eslint-disable complexity */
import { Ydb } from '../../proto/bundle';

// todo: support INTERVAL

const {
  DATE,
  DATETIME,
  TIMESTAMP,
  TZ_DATE,
  TZ_DATETIME,
  TZ_TIMESTAMP,
} = Ydb.Type.PrimitiveTypeId;

export const dateTypeToProp: Partial<Record<Ydb.Type.PrimitiveTypeId, string>> = {
  [DATE]: 'uint32Value',
  [DATETIME]: 'uint32Value',
  [TIMESTAMP]: 'uint64Value',
  [TZ_DATE]: 'textValue',
  [TZ_DATETIME]: 'textValue',
  [TZ_TIMESTAMP]: 'textValue',
};

export function convertToDateObjectIfNeeded(typeId: Ydb.Type.PrimitiveTypeId, value: unknown) {
  switch (typeId) {
    case DATE: return new Date((value as number) * 3600 * 1000 * 24);
    case DATETIME: return new Date((value as number) * 1000);
    case TIMESTAMP: return new Date(Number((value as bigint) / 1000n));
    case TZ_DATE: return new Date(value as string);
    case TZ_DATETIME: return new Date(value as string);
    case TZ_TIMESTAMP: return new Date(value as string);
    default: return value;
  }
}

export function convertFromDateObjectIfNeeded(typeId: Ydb.Type.PrimitiveTypeId, value: unknown) {
  switch (typeId) {
    case DATE: return (value as Date).valueOf() / 3600 / 1000 / 24;
    case DATETIME: return (value as Date).valueOf() / 1000;
    case TIMESTAMP: return BigInt((value as Date | number).valueOf() * 1000);
    case TZ_DATE: return (value as Date).toDateString();
    case TZ_DATETIME: return (value as Date).toISOString();
    case TZ_TIMESTAMP: return (value as Date).toISOString();
    default: return value;
  }
}
