import { strict as assert } from 'assert';
import { Session } from 'yandex-cloud-lite';
import { Ydb } from '../src';
import { YDB_NAME, YDB_PATH } from '../.env';

type AssertType = typeof assert;
type YdbType = typeof Ydb;

declare global {
  const assert: AssertType;
  const ydb: Ydb;
  const Ydb: YdbType;
}

before(async () => {
  const iamToken = await new Session({ authKeyFile: '.auth-key.json' }).getIamToken();
  const ydb = new Ydb({ dbName: YDB_NAME, iamToken, tablePathPrefix: YDB_PATH });

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
