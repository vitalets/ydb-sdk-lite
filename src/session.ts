/**
 * Session.
 */
import Debug from 'debug';
import { Grpc, getOperationPayload } from './grpc';
import { YdbError, BadSession } from './errors';
import { Ydb } from '../proto/bundle';
import { DataQuery } from './query/data-query';

const debug = Debug('ydb-sdk-lite:session');
const CreateSessionResult = Ydb.Table.CreateSessionResult;

export class Session {
  sessionId!: string;
  busy = false;

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
        await this.init(); // repair session by getting new sessionId from server
        return this.executeQueryUnsafe(...args);
      } else {
        throw e;
      }
    }
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

  private async executeQueryUnsafe(...args: Parameters<typeof DataQuery.prototype.execute>) {
    return new DataQuery(this.grpc, this.tablePathPrefix, this.sessionId).execute(...args);
  }
}
