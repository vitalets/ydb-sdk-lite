import 'dotenv/config';
import { strict as assert } from 'assert';
import { Session } from 'yandex-cloud-lite';
import { Ydb } from '../src';

const oauthToken = process.env.YC_OAUTH_TOKEN || '';
const dbName = process.env.YDB_NAME || '';
const tablePathPrefix = process.env.YDB_PATH || '';

type AssertType = typeof assert;
type YdbType = typeof Ydb;

declare global {
  const assert: AssertType;
  const ydb: Ydb;
  const Ydb: YdbType;
}

before(async () => {
  const iamToken = await new Session({ oauthToken }).getIamToken();
  const ydb = new Ydb({ dbName, iamToken, tablePathPrefix });

  Object.assign(global, {
    assert,
    ydb,
    Ydb,
  });

  await dropTableUsers();
  await createTableUsers();
});

afterEach(async () => {
  await ydb.destroy();
});

async function dropTableUsers() {
  try {
    await ydb.executeYql(`DROP TABLE users`);
  } catch (e) {
    if (!e.message.includes('Cannot find table')) {
      throw e;
    }
  }
}

async function createTableUsers() {
  const query = `
    CREATE TABLE users (
      id String,
      name Utf8,
      isAdmin Bool,
      createdAt Datetime,
      PRIMARY KEY (id)
    );
  `;
  await ydb.executeYql(query);
}
