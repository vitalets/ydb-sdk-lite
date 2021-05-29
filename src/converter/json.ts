/**
 * Json types convertion.
 */
import { Ydb } from '../../proto/bundle';

// see: https://github.com/yandex-cloud/ydb-nodejs-sdk/issues/72
export const JSON_DOCUMENT = 4612;

const jsonTypes = [Ydb.Type.PrimitiveTypeId.JSON, JSON_DOCUMENT];

/**
 * Automatically strigify json params.
 */
export function stringifyJsonIfNeeded(typeId: Ydb.Type.PrimitiveTypeId, value: unknown) {
  return (jsonTypes.includes(typeId) && typeof value !== 'string')
    ? JSON.stringify(value)
    : value;
}
