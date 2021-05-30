/**
 * GRPC adapter.
 */
import * as grpc from '@grpc/grpc-js';
import type { RPCImpl } from 'protobufjs';
import { Ydb } from '../proto/bundle';
import { MissingOperation, MissingValue, YdbError } from './errors';

const TableService = Ydb.Table.V1.TableService;
const ScriptingService = Ydb.Scripting.V1.ScriptingService;

type ServiceConstructor = typeof TableService | typeof ScriptingService;

const DEFAULT_ENDPOINT = 'grpcs://ydb.serverless.yandexcloud.net:2135';
const identity = (x: Uint8Array | Buffer) => x as Buffer;

export interface GrpcOptions {
  endpoint?: string;
  dbName: string;
  iamToken: string;
}

export class Grpc {
  readonly endpoint: string;
  readonly dbName: string;
  readonly iamToken: string;
  readonly tableService: InstanceType<typeof TableService>;
  readonly scriptingService: InstanceType<typeof ScriptingService>;

  private client: grpc.Client;
  private metadata: grpc.Metadata;

  constructor({ endpoint, dbName, iamToken }: GrpcOptions) {
    this.endpoint = removeGrpcProtocol(endpoint || DEFAULT_ENDPOINT);
    this.dbName = dbName;
    this.iamToken = iamToken;
    this.client = this.createClient();
    this.metadata = this.createMetadata();
    this.tableService = this.createService('Ydb.Table.V1.TableService', TableService);
    this.scriptingService = this.createService('Ydb.Scripting.V1.ScriptingService', ScriptingService);
  }

  private createClient() {
    // todo: support unsecure connection
    return new grpc.Client(this.endpoint, grpc.credentials.createSsl());
  }

  private createMetadata() {
    const metadata = new grpc.Metadata();
    metadata.add('x-ydb-database', this.dbName);
    metadata.add('x-ydb-auth-ticket', this.iamToken);
    metadata.add('x-ydb-sdk-build-info', 'ydb-nodejs-sdk/1.9.0');
    return metadata;
  }

  private createService<T extends ServiceConstructor>(name: string, ctor: T) {
    const rpcImpl: RPCImpl = (method, requestData, callback) => {
      const path = `/${name}/${method.name}`;
      this.client.makeUnaryRequest(path, identity, identity, requestData, this.metadata, {}, callback);
    };
    return ctor.create(rpcImpl) as InstanceType<T>;
  }
}

function removeGrpcProtocol(url: string) {
  return url.replace(/^grpcs?:\/\//, '');
}

export interface GrpcResponse {
  operation?: (Ydb.Operations.IOperation|null);
}

export function getOperationPayload(response: GrpcResponse): Uint8Array {
  const { operation } = response;

  if (!operation) {
    throw new MissingOperation('No operation in response!');
  }

  YdbError.checkStatus(operation);

  const value = operation.result?.value;
  if (!value) {
    throw new MissingValue('Missing operation result value!');
  }

  return value;
}
