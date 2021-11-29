/**
 * Convertion from js types to ydb.
 */
import { Ydb, google } from '../../proto/bundle';
import { convertFromDateObjectIfNeeded, dateTypeToProp } from './date';
import { bigIntToLong } from './bigint';
import { stringifyJsonIfNeeded } from './json';

const NullValue = google.protobuf.NullValue;
const PrimitiveTypeId = Ydb.Type.PrimitiveTypeId;

// todo: support DECIMAL

const typeToProp: Partial<Record<Ydb.Type.PrimitiveTypeId, string>> = {
  [PrimitiveTypeId.BOOL]: 'boolValue',
  [PrimitiveTypeId.INT8]: 'int32Value',
  [PrimitiveTypeId.UINT8]: 'uint32Value',
  [PrimitiveTypeId.INT16]: 'int32Value',
  [PrimitiveTypeId.UINT16]: 'uint32Value',
  [PrimitiveTypeId.INT32]: 'int32Value',
  [PrimitiveTypeId.UINT32]: 'uint32Value',
  [PrimitiveTypeId.INT64]: 'int64Value',
  [PrimitiveTypeId.UINT64]: 'uint64Value',
  [PrimitiveTypeId.FLOAT]: 'floatValue',
  [PrimitiveTypeId.DOUBLE]: 'doubleValue',
  [PrimitiveTypeId.STRING]: 'bytesValue',
  [PrimitiveTypeId.UTF8]: 'textValue',
  [PrimitiveTypeId.JSON]: 'textValue',
  [PrimitiveTypeId.JSON_DOCUMENT]: 'textValue',
  [PrimitiveTypeId.UUID]: 'textValue',
  ...dateTypeToProp,
};

const YDB_NULL_VALUE = { nullFlagValue: NullValue.NULL_VALUE };

export function buildTypedValue(value: unknown, typeId: keyof typeof typeToProp, { nullable = true } = {}) {
  return {
    type: buildType(typeId, nullable),
    value: buildValue(value, typeId)
  };
}

function buildType(typeId: Ydb.Type.PrimitiveTypeId, nullable: boolean) {
  return nullable
    ? { optionalType: { item: { typeId } } }
    : { typeId };
}

function buildValue(value: unknown, typeId: keyof typeof typeToProp) {
  if (value === null || value === undefined) {
    return YDB_NULL_VALUE;
  }
  const propName = typeToProp[typeId];
  if (propName === undefined) {
    throw new Error(`Unsupported type id: ${typeId}, value: ${value}`);
  }

  value = stringifyJsonIfNeeded(typeId, value);
  value = convertFromDateObjectIfNeeded(typeId, value);
  value = transformValueByPropName(propName, value);

  return { [propName]: value } as Ydb.IValue;
}

function transformValueByPropName(propName: string, value: unknown) {
  switch (propName) {
    case 'bytesValue': return Buffer.from(value as string);
    case 'int64Value': return bigIntToLong(value as bigint);
    case 'uint64Value': return bigIntToLong(value as bigint);
    default: return value;
  }
}
