import 'dotenv/config';
import { strict as assert } from 'assert';
import { Session } from 'yandex-cloud';
import { Ydb } from '../src';

const oauthToken = process.env.YC_OAUTH_TOKEN!;
const dbName = process.env.YDB_NAME!;

type AssertType = typeof assert;

declare global {
  const assert: AssertType;
  const ydb: Ydb;
}

const tablePathPrefix = 'test';

before(async () => {
  const iamToken = await getIamToken();
  const ydb = new Ydb({ dbName, iamToken, tablePathPrefix });

  Object.assign(global, {
    assert,
    ydb,
  });

  await dropTableUsers();
  await createTableUsers();
});

afterEach(async () => {
  await ydb.destroy();
});

async function getIamToken() {
  const session = new Session({ oauthToken });
  return (session as any).__tokenCreator(); // eslint-disable-line @typescript-eslint/no-explicit-any
}

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
