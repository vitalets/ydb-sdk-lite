import 'dotenv/config';
import { strict as assert } from 'assert';
import { Session } from 'yandex-cloud';
import { Ydb } from '../src';

const targetPath = process.env.TARGET_PATH || '../src';
const oauthToken = process.env.YC_OAUTH_TOKEN!;
const dbName = process.env.YDB_NAME!;

type AssertType = typeof assert;

declare global {
  const assert: AssertType;
  const ydb: Ydb;
}

before(async () => {
  const { Ydb } = await import(targetPath);
  const iamToken = await getIamToken();
  const ydb = new Ydb({ dbName, iamToken });

  Object.assign(global, {
    assert,
    ydb,
  });
});

afterEach(async () => {
  await ydb.destroy();
});

async function getIamToken() {
  const session = new Session({ oauthToken });
  return (session as any).__tokenCreator(); // eslint-disable-line @typescript-eslint/no-explicit-any
}
