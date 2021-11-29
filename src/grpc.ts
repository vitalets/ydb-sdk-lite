/**
 * GRPC adapter.
 */
import * as grpc from '@grpc/grpc-js';
import type { RPCImpl } from 'protobufjs';
import { Ydb } from '../proto/bundle';
import { MissingOperation, MissingValue, YdbError } from './errors';

const TableService = Ydb.Table.V1.TableService;
const ScriptingService = Ydb.Scripting.V1.ScriptingService;
const DiscoveryService = Ydb.Discovery.V1.DiscoveryService;

type ServiceConstructor = typeof TableService
  | typeof ScriptingService
  | typeof DiscoveryService;

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
  readonly discoveryService: InstanceType<typeof DiscoveryService>;

  /** Ендпойнт, обнаруженный через discovery и используемый в */
  discoveredEndpoint = '';

  /** Через этот клиент делаем discovery */
  private discoveryClient: grpc.Client;
  /** Через этот клиент делаем все остальные операции */
  private optimalClientPromise?: Promise<grpc.Client>;
  private metadata: grpc.Metadata;

  constructor({ endpoint, dbName, iamToken }: GrpcOptions) {
    this.endpoint = removeGrpcProtocol(endpoint || DEFAULT_ENDPOINT);
    this.dbName = dbName;
    this.iamToken = iamToken;
    this.discoveryClient = createGrpcClient(this.endpoint);
    this.metadata = this.createMetadata();
    this.tableService = this.createService('Ydb.Table.V1.TableService', TableService);
    this.scriptingService = this.createService('Ydb.Scripting.V1.ScriptingService', ScriptingService);
    this.discoveryService = this.createService('Ydb.Discovery.V1.DiscoveryService', DiscoveryService);
  }

  private async getClient(serviceName: string) {
    // пока такой самый простой вариант :)
    return serviceName === 'Ydb.Discovery.V1.DiscoveryService'
      ? this.discoveryClient
      : this.getOptimalClient();
  }

  private async getOptimalClient() {
    if (!this.optimalClientPromise) {
      this.optimalClientPromise = this.getOptimalEndpoint()
        .then(endpoint => endpoint ? createGrpcClient(endpoint) : this.discoveryClient);
    }
    return this.optimalClientPromise;
  }

  private async getOptimalEndpoint() {
    const response = await this.discoveryService.listEndpoints({ database: this.dbName });
    const payload = getOperationPayload(response);
    const { selfLocation, endpoints } = Ydb.Discovery.ListEndpointsResult.decode(payload);
    const { address, port } = endpoints.find(e => e.location === selfLocation) || endpoints[0];
    return address && (this.discoveredEndpoint = `${address}:${port}`);
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
      this.getClient(name).then(client => {
        client.makeUnaryRequest(path, identity, identity, requestData, this.metadata, {}, callback);
      }, error => callback(null, error));
    };
    return ctor.create(rpcImpl) as InstanceType<T>;
  }
}

function createGrpcClient(endpoint: string) {
  // todo: support unsecure connection
  return new grpc.Client(endpoint, grpc.credentials.createSsl());
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
