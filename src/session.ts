/**
 * Session.
 */
import Debug from 'debug';
import { Grpc, getOperationPayload } from './grpc';
import { YdbError } from './errors';
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

  async executeQuery(...args: Parameters<typeof DataQuery.prototype.execute>) {
    return new DataQuery(this.grpc, this.tablePathPrefix, this.sessionId).execute(...args);
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
}
