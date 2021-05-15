/**
 * Execute single query.
 */
import { Grpc, getOperationPayload } from './grpc';
import { Ydb } from '../proto/bundle';

type IExecuteDataQueryRequest = Ydb.Table.IExecuteDataQueryRequest;
type IPrepareQueryResult = Ydb.Table.IPrepareQueryResult;
type ITransactionControl = Ydb.Table.ITransactionControl;
type IOperationParams = Ydb.Operations.IOperationParams;
type IQueryCachePolicy = Ydb.Table.IQueryCachePolicy;
type IQuery = Ydb.Table.IQuery;
const ExecuteQueryResult = Ydb.Table.ExecuteQueryResult;

type IExecuteYqlRequest = Ydb.Scripting.IExecuteYqlRequest;
const ExecuteYqlResult = Ydb.Table.ExecuteQueryResult;

const AUTO_TX: ITransactionControl = {
  beginTx: {
      serializableReadWrite: {}
  },
  commitTx: true
};

interface IQueryParams {
  [k: string]: Ydb.ITypedValue
}

export class Query {
  constructor(private grpc: Grpc, private tablePathPrefix: string, private sessionId: string) { }

  async execute(
    inputQuery: IPrepareQueryResult | string,
    parameters: IQueryParams = {},
    txControl: ITransactionControl = AUTO_TX,
    operationParams?: IOperationParams,
    queryCachePolicy?: IQueryCachePolicy
  ) {
    const query = this.buildQuery(inputQuery);
    const request: IExecuteDataQueryRequest = {
      sessionId: this.sessionId,
      query,
      parameters,
      txControl,
      operationParams,
      queryCachePolicy,
    };

    const response = await this.grpc.tableService.executeDataQuery(request);
    const payload = getOperationPayload(response);
    return ExecuteQueryResult.decode(payload);
  }

  private buildQuery(inputQuery: IPrepareQueryResult | string): IQuery  {
    return typeof inputQuery === 'string'
      ? { yqlText: addTablePathPrefix(inputQuery, this.tablePathPrefix) }
      : { id: inputQuery.queryId };
  }
}

export class Yql {
  constructor(private grpc: Grpc, private tablePathPrefix: string) { }

  async execute(inputQuery: string, parameters: IQueryParams = {}) {
    const request: IExecuteYqlRequest = {
      script: addTablePathPrefix(inputQuery, this.tablePathPrefix),
      parameters,
    };

    const response = await this.grpc.scriptingService.executeYql(request);
    const payload = getOperationPayload(response);
    return ExecuteYqlResult.decode(payload);
  }
}

function addTablePathPrefix(query: string, tablePathPrefix: string) {
  return tablePathPrefix
    ? `PRAGMA TablePathPrefix = "${tablePathPrefix}";\n${query}`
    : query;
}
