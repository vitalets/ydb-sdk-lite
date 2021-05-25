/**
 * Convertion from ydb types to js.
 */
import { Ydb } from '../../proto/bundle';
import { ydbValueToDate } from './date';

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
  const dateConverter = ydbValueToDate[typeId];
  return dateConverter
    ? dateConverter(value as number | string)
    : value;
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
  switch (propName) {
    case 'bytesValue': return Buffer.from(value as string, 'base64').toString();
    case 'nullFlagValue': return null;
    default: return value;
  }
}
