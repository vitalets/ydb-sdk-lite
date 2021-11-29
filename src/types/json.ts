/**
 * Json types convertion.
 */
import { Ydb } from '../../proto/bundle';

const jsonTypes = [
  Ydb.Type.PrimitiveTypeId.JSON,
  Ydb.Type.PrimitiveTypeId.JSON_DOCUMENT
];

/**
 * Automatically strigify json params.
 */
export function stringifyJsonIfNeeded(typeId: Ydb.Type.PrimitiveTypeId, value: unknown) {
  return (jsonTypes.includes(typeId) && typeof value !== 'string')
    ? JSON.stringify(value)
    : value;
}
