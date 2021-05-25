/**
 * Date types convertion helpers.
 */
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

export const ydbValueToDate: Partial<Record<Ydb.Type.PrimitiveTypeId, (value: number | string) => Date>> = {
  [DATE]: value => new Date((value as number) * 3600 * 1000 * 24),
  [DATETIME]: value => new Date((value as number) * 1000),
  [TIMESTAMP]: value => new Date((value as number) / 1000),
  [TZ_DATE]: value => new Date(value),
  [TZ_DATETIME]: value => new Date(value),
  [TZ_TIMESTAMP]: value => new Date(value),
};

export const dateToYdbValue: Partial<Record<Ydb.Type.PrimitiveTypeId, (value: Date) => number | string>> = {
  [DATE]: value => value.valueOf() / 3600 / 1000 / 24,
  [DATETIME]: value => value.valueOf() / 1000,
  [TIMESTAMP]: value => value.valueOf() * 1000,
  [TZ_DATE]: value => value.toDateString(),
  [TZ_DATETIME]: value => value.toISOString(),
  [TZ_TIMESTAMP]: value => value.toISOString(),
};
