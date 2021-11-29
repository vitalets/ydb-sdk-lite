/**
 * Convertion from ydb types to js.
 */
import Long from 'long';
import { Ydb } from '../../proto/bundle';
import { convertToDateObjectIfNeeded } from './date';
import { longToBigInt } from './bigint';

type IResultSet = Ydb.IResultSet;
type IValue = Ydb.IValue;
type IColumn = Ydb.IColumn;

export function resultSetToJs(resultSet: IResultSet) {
  const rows = resultSet.rows || [];
  const columns = resultSet.columns || [];
  // console.dir(resultSet, { depth: null })
  return rows.map(row => rowToJs(row, columns));
}

function rowToJs(row: IValue, columns: IColumn[]) {
  const items = row.items || [];
  const result: Record<string, unknown> = {};
  items.forEach((ydbValue, index) => {
    const column = columns[index];
    result[column.name!] = valueToJs(ydbValue, column);
  });
  return result;
}

function valueToJs(ydbValue: IValue, column: IColumn) {
  const value = extractValue(ydbValue);
  if (value === null) {
    return null;
  }
  const typeId = getColumnTypeId(column);
  return convertToDateObjectIfNeeded(typeId, value);
}

function getColumnTypeId(column: IColumn) {
  const { type } = column;
  const typeId = (type?.optionalType?.item?.typeId || type?.typeId) ?? null;
  if (typeId === null) {
    throw new Error(`Got empty typeId for column ${JSON.stringify(column)}.`);
  }
  return typeId;
}

function extractValue(ydbValue: IValue) {
  const nonPrimitiveProps = ['items', 'pairs', 'nestedValue'];
  const propName = Object.keys(ydbValue).find(key => !nonPrimitiveProps.includes(key)) as keyof Ydb.IValue;
  if (!propName) {
    throw new Error(`Expected a primitive value, got ${ydbValue}!`);
  }
  const value = ydbValue[propName];
  return transformValueByPropName(propName, value);
}

function transformValueByPropName(propName: string, value: unknown) {
  switch (propName) {
    case 'bytesValue': return Buffer.from(value as string, 'base64').toString();
    case 'int64Value': return longToBigInt(value as Long);
    case 'uint64Value': return longToBigInt(value as Long);
    case 'nullFlagValue': return null;
    default: return value;
  }
}
