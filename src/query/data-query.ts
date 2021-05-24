/**
 * Execute data query via table service.
 */
import { Grpc, getOperationPayload } from '../grpc';
import { Ydb } from '../../proto/bundle';
import { IQueryParams, addTablePathPrefix, convertResultToJs } from './helpers';

type IPrepareQueryResult = Ydb.Table.IPrepareQueryResult;
type ITransactionControl = Ydb.Table.ITransactionControl;
type IOperationParams = Ydb.Operations.IOperationParams;
type IQueryCachePolicy = Ydb.Table.IQueryCachePolicy;
type IQuery = Ydb.Table.IQuery;

type IExecuteDataQueryRequest = Ydb.Table.IExecuteDataQueryRequest;
const ExecuteQueryResult = Ydb.Table.ExecuteQueryResult;

export const AUTO_TX_RW: ITransactionControl = {
  beginTx: {
      serializableReadWrite: {}
  },
  commitTx: true
};

export const AUTO_TX_RO: ITransactionControl = {
  beginTx: {
    onlineReadOnly: {
      allowInconsistentReads:false
    }
  },
  commitTx: true
};

export class DataQuery {
  constructor(private grpc: Grpc, private tablePathPrefix: string, private sessionId: string) { }

  async execute(
    inputQuery: IPrepareQueryResult | string,
    parameters: IQueryParams = {},
    txControl: ITransactionControl = AUTO_TX_RW,
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
    const result = ExecuteQueryResult.decode(payload);
    return convertResultToJs(result);
  }

  private buildQuery(inputQuery: IPrepareQueryResult | string): IQuery  {
    return typeof inputQuery === 'string'
      ? { yqlText: addTablePathPrefix(inputQuery, this.tablePathPrefix) }
      : { id: inputQuery.queryId };
  }
}

