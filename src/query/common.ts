import { Ydb } from '../../proto/bundle';
import { GrpcResponse, getOperationPayload } from '../grpc';
import { resultSetToJs } from '../converter/ydb-to-js';
import { buildTypedValue } from '../converter/js-to-ydb';
import { inferParamTypesByQuery, InferedTypes } from '../converter/infer';

type IExecuteQueryResult = Ydb.Table.IExecuteQueryResult;
type IExecuteYqlResult = Ydb.Scripting.IExecuteYqlResult;

type IQueryResult = IExecuteQueryResult | IExecuteYqlResult;

export interface IQueryParams {
  [k: string]: unknown
}

export interface IQueryTypedParams {
  [k: string]: Ydb.ITypedValue
}

export function addTablePathPrefix(query: string, tablePathPrefix: string) {
  return tablePathPrefix
    ? `PRAGMA TablePathPrefix = "${tablePathPrefix}";\n${query}`
    : query;
}

export function getQueryPayload(response: GrpcResponse, query: string) {
  try {
    return getOperationPayload(response);
  } catch (e) {
    e.message += `\nQuery: ${truncate(query, 300)}`;
    throw e;
  }
}

export function convertResultToJs({ resultSets }: IQueryResult) {
  return (resultSets || []).map(resultSet => resultSetToJs(resultSet));
}

export function buildTypedParams(query: string, params: IQueryParams) {
  const result: IQueryTypedParams = {};
  const keys = Object.keys(params);
  if (keys.length === 0) {
    return result;
  }
  const types = inferParamTypesByQuery(query);
  keys.forEach(key => {
    const value = params[key];
    result[key] = value instanceof Ydb.TypedValue ? value : buildTypedParam(value, types, key);
  });
  return result;
}

function buildTypedParam(value: unknown, types: InferedTypes, key: string) {
  const type = types[key];
  if (!type) {
    throw new Error(`Can not infer type for parameter: ${key}`);
  }
  const { typeId, nullable } = type;
  return buildTypedValue(value, typeId, { nullable });
}

function truncate(str: string, maxLength: number) {
  return str.length > maxLength ? `${str.substr(0, maxLength)}...` : str;
}
