/**
 * GRPC adapter.
 */
import Debug from 'debug';
import * as grpc from '@grpc/grpc-js';
import type { RPCImpl } from 'protobufjs';
import { Ydb } from '../../proto/bundle';
import { GrpcResponse, getOperationPayload } from './payload';

const debug = Debug('ydb-sdk-lite:api');

export { GrpcResponse, getOperationPayload };

const DEFAULT_ENDPOINT = 'grpcs://ydb.serverless.yandexcloud.net:2135';

const TableService = Ydb.Table.V1.TableService;
const ScriptingService = Ydb.Scripting.V1.ScriptingService;
const DiscoveryService = Ydb.Discovery.V1.DiscoveryService;

type ServiceConstructor = typeof TableService
  | typeof ScriptingService
  | typeof DiscoveryService;

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

  /**
   * Основной клиент: ходит через ydb.serverless.yandexcloud.net
   * Через него работаем по дефолту и делаем discovery
   */
  protected client: grpc.Client;
  protected metadata: grpc.Metadata;

  constructor({ endpoint, dbName, iamToken }: GrpcOptions) {
    this.endpoint = removeGrpcProtocol(endpoint || DEFAULT_ENDPOINT);
    this.dbName = dbName;
    this.iamToken = iamToken;
    this.client = createGrpcClient(this.endpoint);
    this.metadata = this.createMetadata();
    this.tableService = this.createService('Ydb.Table.V1.TableService', TableService);
    this.scriptingService = this.createService('Ydb.Scripting.V1.ScriptingService', ScriptingService);
    this.discoveryService = this.createService('Ydb.Discovery.V1.DiscoveryService', DiscoveryService);
  }

  protected createMetadata() {
    const metadata = new grpc.Metadata();
    metadata.add('x-ydb-database', this.dbName);
    metadata.add('x-ydb-auth-ticket', this.iamToken);
    metadata.add('x-ydb-sdk-build-info', 'ydb-nodejs-sdk/1.9.0');
    return metadata;
  }

  protected createService<T extends ServiceConstructor>(serviceName: string, ctor: T) {
    const rpcImpl: RPCImpl = (method, requestData, callback) => {
      const path = `/${serviceName}/${method.name}`;
      this.client.makeUnaryRequest(path, identity, identity, requestData, this.metadata, {}, callback);
    };
    const service = ctor.create(rpcImpl) as InstanceType<T>;
    debug(`Service created: ${serviceName}`);
    return service;
  }

  /**
   * Сейчас дискавери возвращает 3 ендпойнта со списком доступных сервисов:
   * - ru-central1-a.ydb.serverless.yandexcloud.net
   * - ru-central1-b.ydb.serverless.yandexcloud.net
   * - ru-central1-c.ydb.serverless.yandexcloud.net
   * В основном sdk они ротируются, и если какой-то отвечает ошибкой, то он пессимизируется.
   * Тут дискавери пока отключил, т.к. это лишние 100мс, а профит для функций не очень ясен.
   * Кейс когда это полезно - если упадет именно ydb.serverless.yandexcloud.net,
   * который сейчас сам роутит на один из этих серверов.
   *
   * Еще вариант - запускать дисквери параллельно с основным запросом.
   * Тогда в случае ошибки запроса мы уже будем иметь список серверов.
   *
   * Вобщем, наблюдаем. Это метод пока нигде не используется.
   */
  async discoverEndpoints() {
    debug(`Discovery started`);
    const time = Date.now();
    const response = await this.discoveryService.listEndpoints({ database: this.dbName });
    const payload = getOperationPayload(response);
    const data = Ydb.Discovery.ListEndpointsResult.decode(payload);
    debug(`Discovery done (${Date.now() - time}ms): ${JSON.stringify({ data })}`);
    return data;
  }
}

function createGrpcClient(endpoint: string) {
  // todo: support unsecure connection
  return new grpc.Client(endpoint, grpc.credentials.createSsl());
}

function removeGrpcProtocol(url: string) {
  return url.replace(/^grpcs?:\/\//, '');
}
