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
    const [ rows ] = await ydb.executeDataQuery(query, { $userId: userId }, Ydb.AUTO_TX_RO);

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
      UPSERT INTO users (id, name, isAdmin, createdAt)
      VALUES ("${userId}", "Alice", true, Datetime("2021-04-17T09:48:19Z"))
    `, {}, Ydb.AUTO_TX_RO);

    await assert.rejects(promise, /Operation 'Upsert' can't be performed in read only transaction/);
  });

  it('cache query on server', async () => {
    const query = `
      DECLARE $userId AS String;
      SELECT id, name, isAdmin, createdAt FROM users WHERE id = $userId;
    `;
    const [ rows ] = await ydb.executeDataQuery(query, { $userId: 'foo' }, Ydb.AUTO_TX_RO, {}, { keepInCache: true });
    assert.deepEqual(rows, []);
  });
});

