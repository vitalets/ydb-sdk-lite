/**
 * Convertion from js types to ydb.
 */
import { Ydb, google } from '../../proto/bundle';
import { dateToYdbValue, dateTypeToProp } from './date';

const NullValue = google.protobuf.NullValue;
const PrimitiveTypeId = Ydb.Type.PrimitiveTypeId;

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
  [PrimitiveTypeId.YSON]: 'bytesValue',
  [PrimitiveTypeId.JSON]: 'textValue',
  [PrimitiveTypeId.UUID]: 'textValue',
  ...dateTypeToProp,
};

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

// todo: refactor this fn
//eslint-disable-next-line complexity
function buildValue(value: unknown, typeId: keyof typeof typeToProp) {
  if (value === null || value === undefined) {
    return {
      nullFlagValue: NullValue.NULL_VALUE
    };
  }
  const propName = typeToProp[typeId];
  if (propName === undefined) {
    throw new Error(`Unsupported type: ${typeId}`);
  }
  if (propName === 'bytesValue' && typeof value === 'string') {
    value = Buffer.from(value);
  }
  const dateConverter = dateToYdbValue[typeId];
  value = dateConverter ? dateConverter(value as Date) : value;

  return { [propName]: value };
}
