/**
 * Infer parameters types by query text.
 */
import { Ydb } from '../../proto/bundle';

// see: https://www.typescriptlang.org/docs/handbook/namespaces.html#aliases
import PrimitiveTypeId = Ydb.Type.PrimitiveTypeId;

export interface InferedType {
  typeName: string;
  typeId: Ydb.Type.PrimitiveTypeId;
  nullable: boolean;
}

export interface InferedTypes {
  [k: string]: InferedType
}

// see: https://cloud.yandex.ru/docs/ydb/concepts/datatypes
// see: https://cloud.yandex.ru/docs/ydb/yql/reference/types/primitive
const typeNameToId: Record<string, PrimitiveTypeId> = {
  BOOL: PrimitiveTypeId.BOOL,
  INT8: PrimitiveTypeId.INT8,
  UINT8: PrimitiveTypeId.UINT8,
  INT16: PrimitiveTypeId.INT16,
  UINT16: PrimitiveTypeId.UINT16,
  INT32: PrimitiveTypeId.INT32,
  UINT32: PrimitiveTypeId.UINT32,
  INT64: PrimitiveTypeId.INT64,
  UINT64: PrimitiveTypeId.UINT64,
  FLOAT: PrimitiveTypeId.FLOAT,
  DOUBLE: PrimitiveTypeId.DOUBLE,
  STRING: PrimitiveTypeId.STRING,
  UTF8: PrimitiveTypeId.UTF8,
  JSONDOCUMENT: PrimitiveTypeId.JSON_DOCUMENT,
  JSON: PrimitiveTypeId.JSON,
  UUID: PrimitiveTypeId.UUID,
  DATE: PrimitiveTypeId.DATE,
  DATETIME: PrimitiveTypeId.DATETIME,
  TIMESTAMP: PrimitiveTypeId.TIMESTAMP,
  TZDATE: PrimitiveTypeId.TZ_DATE,
  TZDATETIME: PrimitiveTypeId.TZ_DATETIME,
  TZTIMESTAMP: PrimitiveTypeId.TZ_TIMESTAMP,
};

const PARAM_REGEXP = /declare\s+(?<name>\$[a-z0-9_]+)\s+as\s+(?<typeName>[a-z0-9]+)(?<nullable>\??)/ig;

export function inferParamTypesByQuery(query: string) {
  const result: InferedTypes = {};
  const matches = [...query.matchAll(PARAM_REGEXP)];
  matches.forEach(({ groups }) => {
    let { name, typeName, nullable } = groups || {}; // eslint-disable-line prefer-const
    typeName = typeName.toUpperCase();
    const typeId = typeNameToId[typeName];
    result[name] = { typeName, typeId, nullable: nullable === '?' };
  });
  return result;
}

