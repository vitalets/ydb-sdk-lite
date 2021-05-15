/**
 * Session.
 */
import { Grpc, getOperationPayload } from './grpc';
import { Ydb } from '../proto/bundle';
import { Query } from './query';

const CreateSessionResult = Ydb.Table.CreateSessionResult;

export class Session {
  private sessionId!: string;
  busy = false;

  constructor(private grpc: Grpc, private tablePathPrefix: string) { }

  async init() {
    const response = await this.grpc.tableService.createSession({});
    const payload = getOperationPayload(response);
    this.sessionId = CreateSessionResult.decode(payload).sessionId;
  }

  async executeQuery(...args: Parameters<typeof Query.prototype.execute>) {
    return new Query(this.grpc, this.tablePathPrefix, this.sessionId).execute(...args);
  }

  async destroy() {
    try {
    const response = await this.grpc.tableService.deleteSession({ sessionId: this.sessionId });
    return getOperationPayload(response);
    } catch (e) {
      // ignore session destroy error
    }
  }
}
