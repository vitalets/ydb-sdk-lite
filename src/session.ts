/**
 * Session.
 */
import Debug from 'debug';
import { Grpc, getOperationPayload } from './api';
import { YdbError, BadSession, Unavailable } from './api/errors';
import { Ydb } from '../proto/bundle';
import { DataQuery } from './query/data-query';

const debug = Debug('ydb-sdk-lite:session');
const CreateSessionResult = Ydb.Table.CreateSessionResult;

export class Session {
  sessionId!: string;
  private busy = false;

  constructor(private grpc: Grpc, private tablePathPrefix: string) { }

  async init() {
    const response = await this.grpc.tableService.createSession({});
    const payload = getOperationPayload(response);
    this.sessionId = CreateSessionResult.decode(payload).sessionId;
    debug(`Session created: ${this.sessionId}`);
  }

  async executeQuery(...args: Parameters<typeof Session.prototype.executeQueryUnsafe>) {
    try {
      return await this.executeQueryUnsafe(...args);
    } catch (e) {
      if (e instanceof BadSession) {
        // if session is bad - retry once with new session
        await this.init();
        return this.executeQueryUnsafe(...args);
      } else if (e instanceof Unavailable) {
        // if unavailable - retry once the same request
        // see: https://cloud.yandex.ru/docs/ydb/ydb-sdk/error_handling#termination-statuses
        // todo: better retry policy
        return this.executeQueryUnsafe(...args);
      } else {
        throw e;
      }
    }
  }

  setBusy(value: boolean) {
    this.busy = value;
    debug(`Session ${value ? 'taken' : 'free'}: ${this.sessionId}`);
  }

  isBusy() {
    return this.busy;
  }

  async destroy() {
    try {
      const response = await this.grpc.tableService.deleteSession({ sessionId: this.sessionId });
      YdbError.checkStatus(response!.operation!);
      debug(`Session destroyed: ${this.sessionId}`);
    } catch (e) {
      debug(e);
    }
  }

  // Keep this method protected, not private because ts does not emit parameters for private methods,
  // but we use it in executeQuery() declaration.
  protected async executeQueryUnsafe(...args: Parameters<typeof DataQuery.prototype.execute>) {
    return new DataQuery(this.grpc, this.tablePathPrefix, this.sessionId).execute(...args);
  }
}
