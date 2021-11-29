/**
 * Execute yql query via scripting service.
 */
import Debug from 'debug';
import { Grpc } from '../api';
import { Ydb } from '../../proto/bundle';
import {
  IQueryParams,
  addTablePathPrefix,
  convertResultToJs,
  buildTypedParams,
  getQueryPayload,
} from './common';

const debug = Debug('ydb-sdk-lite:yql');

type IExecuteYqlRequest = Ydb.Scripting.IExecuteYqlRequest;
const ExecuteYqlResult = Ydb.Scripting.ExecuteYqlResult;

export class YqlQuery {
  constructor(private grpc: Grpc, private tablePathPrefix: string) { }

  async execute(inputQuery: string, parameters: IQueryParams = {}) {
    const request: IExecuteYqlRequest = {
      script: addTablePathPrefix(inputQuery, this.tablePathPrefix),
      parameters: buildTypedParams(inputQuery, parameters),
    };

    debug(`Executing yql query: ${request.script}`);
    const response = await this.grpc.scriptingService.executeYql(request);
    const payload = getQueryPayload(response, request.script || '', parameters);
    const result = ExecuteYqlResult.decode(payload);
    return convertResultToJs(result);
  }
}
