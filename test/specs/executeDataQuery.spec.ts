describe('executeDataQuery', () => {

  it('upsert and select data', async () => {
    const userId = String(Date.now());

    await ydb.executeDataQuery(`
      UPSERT INTO users (id, name, isAdmin, createdAt)
      VALUES ("${userId}", "Alice", true, Datetime("2021-04-17T09:48:19Z"))
    `);

    const query = `
      DECLARE $userId AS String;
      SELECT id, name, isAdmin, createdAt FROM users WHERE id = $userId;
    `;
    const params = { userId };
    const [ rows ] = await ydb.executeDataQuery(query, params, Ydb.AUTO_TX_RO);

    assert.deepEqual(rows, [{
      id: userId,
      name: 'Alice',
      isAdmin: true,
      createdAt: new Date('2021-04-17T09:48:19Z'),
    }]);
  });

  it('error on upsert in read-only transaction', async () => {
    const userId = String(Date.now());

    const promise = ydb.executeDataQuery(`
      DECLARE $userId AS String;
      UPSERT INTO users (id, name, isAdmin, createdAt)
      VALUES ($userId, "Alice", true, Datetime("2021-04-17T09:48:19Z"))
    `, { userId }, Ydb.AUTO_TX_RO);

    await assert.rejects(promise, /\[issueCode: 2008\] Operation 'Upsert' can't be performed in read only transaction/);
    await assert.rejects(promise, /Query: PRAGMA TablePathPrefix .+ UPSERT INTO users/s);
    await assert.rejects(promise, /Params: {"userId":"\d+"}/);
  });

  it('cache query on server', async () => {
    const query = `
      DECLARE $userId AS String;
      SELECT id, name, isAdmin, createdAt FROM users WHERE id = $userId;
    `;
    const [ rows ] = await ydb.executeDataQuery(query, { $userId: 'foo' }, Ydb.AUTO_TX_RO, {}, { keepInCache: true });
    assert.deepEqual(rows, []);
  });

  it('handle bad session: recreate session automatically', async () => {
    const [ rows ] = await ydb.withSession(async session => {
      const invalidSessionId = Buffer.from('xxxxxxxx-xxxxxxxx-xxxxxxxx-xxxxxxxx').toString('base64');
      session.sessionId = `ydb://session/3?node_id=1&id=${invalidSessionId}`;
      return session.executeQuery('SELECT 1');
    });

    assert.deepEqual(rows, [{ column0: 1 }]);
  });

  it('simultaneous withSession should not take same session', async () => {
    const fn = () => ydb.executeDataQuery(`SELECT * FROM users LIMIT 1`, {}, Ydb.AUTO_TX_RO);
    // create two sessions
    await Promise.all([ fn(), fn() ]);
    // run two simultaneous requests over existing sessions
    const checkFn = () => ydb.withSession(async session => session.sessionId);
    const [ id1, id2 ] = await Promise.all([ checkFn(), checkFn() ]);
    assert.notEqual(id1, id2);
  });

  // see: https://cloud.yandex.com/en-ru/docs/ydb/best_practices/timeouts
  it('operation timeout', async () => {
    const query = `SELECT * FROM users`;
    const operationTimeout = { nanos: 1 };
    const promise = ydb.executeDataQuery(query, {}, Ydb.AUTO_TX_RO, { operationTimeout });
    await assert.rejects(promise, /Deadline exceeded during query compilation/);
  });

  // it.skip('discover endpoints', async () => {
  //   await ydb.executeDataQuery(`SELECT * FROM users LIMIT 1`, {}, Ydb.AUTO_TX_RO);
  //   assert.equal(ydb, 'ydb.serverless.yandexcloud.net:2135');
  // });

  // can emulate in tests
  // it.only('handle busy session: retry', async () => {
  //   const userId = String(Date.now());
  //   const fn = () => ydb.executeDataQuery(`
  //     UPSERT INTO users (id, name, isAdmin, createdAt)
  //     VALUES ("${userId}", "${Math.random()}", true, Datetime("2021-04-17T09:48:19Z"))
  //   `);
  //   const res = await Promise.all([ fn(), fn(), fn() ]);
  //   assert.deepEqual(res, [{ column0: 1 }]);
  // });
});

