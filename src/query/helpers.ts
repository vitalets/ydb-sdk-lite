import { Ydb } from '../../proto/bundle';
import { resultSetToJs } from '../converter/ydb-to-js';

type IExecuteQueryResult = Ydb.Table.IExecuteQueryResult;
type IExecuteYqlResult = Ydb.Scripting.IExecuteYqlResult;

type IQueryResult = IExecuteQueryResult | IExecuteYqlResult;

export interface IQueryParams {
  [k: string]: Ydb.ITypedValue
}

export function addTablePathPrefix(query: string, tablePathPrefix: string) {
  return tablePathPrefix
    ? `PRAGMA TablePathPrefix = "${tablePathPrefix}";\n${query}`
    : query;
}

export function convertResultToJs({ resultSets }: IQueryResult) {
  return (resultSets || []).map(resultSet => resultSetToJs(resultSet));
}
