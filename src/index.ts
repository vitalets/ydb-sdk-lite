/**
 * Ydb.
 */
import { Grpc, GrpcOptions } from './grpc';
import { Session } from './session';
import { YqlQuery } from './query/yql-query';

type YdbOptions = GrpcOptions & {
  tablePathPrefix?: string;
}

export class Ydb {
  private grpc: Grpc;
  private tablePathPrefix: string;
  private sessions: Session[] = [];

  constructor({ endpoint, dbName, iamToken, tablePathPrefix }: YdbOptions) {
    this.grpc = new Grpc({ endpoint, dbName, iamToken });
    this.tablePathPrefix = this.buildTablePathPrefix(tablePathPrefix);
  }

  get endpoint() {
    return this.grpc.endpoint;
  }

  get dbName() {
    return this.grpc.dbName;
  }

  get iamToken() {
    return this.grpc.iamToken;
  }

  /**
   * Execute yql query via scripting service.
   * Difference from session.executeQuery:
   * - query can contain DDL instructions (CREATE TABLE, ALTER TABLE, etc)
   * - query can not be prepared and cached on server
   */
  async executeYql(...args: Parameters<typeof YqlQuery.prototype.execute>) {
    return new YqlQuery(this.grpc, this.tablePathPrefix).execute(...args);
  }

  /**
   * Run function with session, allowing to execute prepared queries.
   */
  async withSession<T>(fn: (session: Session) => T) {
    const session = await this.takeSession();
    session.busy = true;
    try {
      return await fn(session);
    } finally {
      session.busy = false;
    }
  }

  async destroy() {
    await Promise.all(this.sessions.map(session => this.destroySession(session)));
  }

  private async takeSession() {
    return this.sessions.find(session => !session.busy) || (await this.createSession());
  }

  private async createSession() {
    const session = new Session(this.grpc, this.tablePathPrefix);
    await session.init();
    this.sessions.push(session);
    return session;
  }

  private async destroySession(session: Session) {
    this.sessions = this.sessions.filter(s => s !== session);
    await session.destroy();
  }

  private buildTablePathPrefix(tablePathPrefix?: string) {
    return tablePathPrefix ? `${this.dbName}/${tablePathPrefix}` : '';
  }
}
