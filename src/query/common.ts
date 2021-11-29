import { Ydb } from '../../proto/bundle';
import { GrpcResponse, getOperationPayload } from '../api';
import { resultSetToJs } from '../types/ydb-to-js';
import { buildTypedValue } from '../types/js-to-ydb';
import { inferParamTypesByQuery, InferedTypes } from '../types/infer';
import { appendMessageToError } from '../utils';

type IExecuteQueryResult = Ydb.Table.IExecuteQueryResult;
type IExecuteYqlResult = Ydb.Scripting.IExecuteYqlResult;

type IQueryResult = IExecuteQueryResult | IExecuteYqlResult;

const MAX_STRING_OUTPUT = 300;

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

export function getQueryPayload(
  response: GrpcResponse,
  query: string,
  params: IQueryParams = {}
) {
  try {
    return getOperationPayload(response);
  } catch (e) {
    const queryMsg = `\nQuery: ${truncate(query, MAX_STRING_OUTPUT)}`;
    const paramsMsg = `\nParams: ${stringifyQueryParams(params)}`;
    appendMessageToError(e, `${queryMsg}${paramsMsg}`);
    throw e;
  }
}

function stringifyQueryParams(params: IQueryParams) {
  return JSON.stringify(params, (_, value) => {
    return typeof value === 'string'
      ? truncate(value, MAX_STRING_OUTPUT)
      : value;
  });
}

export function convertResultToJs({ resultSets }: IQueryResult) {
  return (resultSets || []).map(resultSet => resultSetToJs(resultSet));
}

export function buildTypedParams(query: string, params: IQueryParams) {
  const typedParams: IQueryTypedParams = {};
  const keys = Object.keys(params);
  if (keys.length === 0) return typedParams;
  const types = inferParamTypesByQuery(query);
  keys.forEach(key => {
    const value = params[key];
    key = key.startsWith('$') ? key : `$${key}`;
    typedParams[key] = value instanceof Ydb.TypedValue
      ? value
      : buildTypedParam(value, types, key);
  });
  return typedParams;
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
