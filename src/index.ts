export interface YdbOptions {
  endpoint?: string;
  dbName: string;
  iamToken: string;
}

const DEFAULT_ENDPOINT = 'grpcs://ydb.serverless.yandexcloud.net:2135';

export class Ydb {
  readonly endpoint: string;
  readonly dbName: string;
  readonly iamToken: string;

  constructor({ endpoint, dbName, iamToken }: YdbOptions) {
    this.endpoint = endpoint || DEFAULT_ENDPOINT;
    this.dbName = dbName;
    this.iamToken = iamToken;
  }

  async destroy() {
    // tbd
  }
}
