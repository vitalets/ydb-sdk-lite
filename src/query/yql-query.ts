/**
 * Execute yql query via scripting service.
 */
import { Grpc, getOperationPayload } from '../grpc';
import { Ydb } from '../../proto/bundle';
import { IQueryParams, addTablePathPrefix, convertResultToJs } from './helpers';

type IExecuteYqlRequest = Ydb.Scripting.IExecuteYqlRequest;
const ExecuteYqlResult = Ydb.Scripting.ExecuteYqlResult;

export class YqlQuery {
  constructor(private grpc: Grpc, private tablePathPrefix: string) { }

  async execute(inputQuery: string, parameters: IQueryParams = {}) {
    const request: IExecuteYqlRequest = {
      script: addTablePathPrefix(inputQuery, this.tablePathPrefix),
      parameters,
    };

    const response = await this.grpc.scriptingService.executeYql(request);
    const payload = getOperationPayload(response);
    const result = ExecuteYqlResult.decode(payload);
    return convertResultToJs(result);
  }
}
