/**
 * Convertion from ydb types to js.
 */
import { Ydb } from '../../proto/bundle';

type IResultSet = Ydb.IResultSet;
type IValue = Ydb.IValue;
type IColumn = Ydb.IColumn;
type PrimitiveTypeId = Ydb.Type.PrimitiveTypeId;

const {
  DATE,
  DATETIME,
  TIMESTAMP,
  TZ_DATE,
  TZ_DATETIME,
  TZ_TIMESTAMP,
} = Ydb.Type.PrimitiveTypeId;

const dateBuilders: Partial<Record<PrimitiveTypeId, (value: number | string) => Date>> = {
  [DATE]: value => new Date((value as number) * 3600 * 1000 * 24),
  [DATETIME]: value => new Date((value as number) * 1000),
  [TIMESTAMP]: value => new Date((value as number) / 1000),
  [TZ_DATE]: value => new Date(value as string),
  [TZ_DATETIME]: value => new Date(value as string),
  [TZ_TIMESTAMP]: value => new Date(value as string),
};

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
  const dateBuilder = dateBuilders[typeId];
  return dateBuilder
    ? dateBuilder(value as number | string)
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
  const primitiveProp = Object.keys(ydbValue).find(key => !nonPrimitiveProps.includes(key)) as keyof Ydb.IValue;
  if (!primitiveProp) {
    throw new Error(`Expected a primitive value, got ${ydbValue}!`);
  }
  const value = ydbValue[primitiveProp];
  switch (primitiveProp) {
    case 'bytesValue': return Buffer.from(value as string, 'base64').toString();
    case 'nullFlagValue': return null;
    default: return value;
  }
}
