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
    const [ rows ] = await ydb.executeDataQuery(query, { userId }, Ydb.AUTO_TX_RO);

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
});

