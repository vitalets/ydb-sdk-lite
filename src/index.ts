/**
 * Ydb.
 */
import { Grpc, GrpcOptions } from './api';
import { SessionPool } from './session-pool';
import { Session } from './session';
import { AUTO_TX_RW, AUTO_TX_RO } from './query/data-query';
import { YqlQuery } from './query/yql-query';
import { buildTypedValue } from './types/js-to-ydb';
import { Ydb as ProtoYdb} from '../proto/bundle';
import { DropFirst } from './utils';

export type YdbOptions = GrpcOptions & {
  tablePathPrefix?: string;
}

export class Ydb {
  static AUTO_TX_RW = AUTO_TX_RW;
  static AUTO_TX_RO = AUTO_TX_RO;
  static typedValue = buildTypedValue;
  static PrimitiveTypeId = ProtoYdb.Type.PrimitiveTypeId;

  protected grpc: Grpc;
  protected tablePathPrefix: string;
  protected sessionPool: SessionPool;

  constructor(public options: YdbOptions) {
    const { endpoint, dbName, iamToken, tablePathPrefix } = this.options;
    this.grpc = new Grpc({ endpoint, dbName, iamToken });
    this.tablePathPrefix = this.buildTablePathPrefix(tablePathPrefix);
    this.sessionPool = new SessionPool(this.grpc, this.tablePathPrefix);
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
   * Execute data query via table service.
   * Shortcut for `ydb.withSession(session => session.executeQuery(...))`.
   */
  async executeDataQuery(query: string, ...args: DropFirst<Parameters<typeof Session.prototype.executeQuery>>) {
    return this.withSession(session => session.executeQuery(query, ...args));
  }

  /**
   * Run function with session, allowing to execute prepared queries.
   * todo: is it possible to infer parameters from SessionPool.prototype.withSession?
   */
  async withSession<T>(fn: (session: Session) => T) {
    return this.sessionPool.withSession<T>(fn);
  }

  async destroy() {
    await this.sessionPool.destroy();
  }

  protected buildTablePathPrefix(tablePathPrefix?: string) {
    return tablePathPrefix ? `${this.dbName}/${tablePathPrefix}` : '';
  }
}
