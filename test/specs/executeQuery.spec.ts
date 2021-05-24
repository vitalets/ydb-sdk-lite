describe('executeQuery', () => {

  it('upsert and select data', async () => {
    const userId = String(Date.now());

    await ydb.withSession(session => session.executeQuery(`
      UPSERT INTO users (id, name, isAdmin, createdAt)
      VALUES ("${userId}", "Alice", true, Datetime("2021-04-17T09:48:19Z"))
    `));

    const query = `SELECT id, name, isAdmin, createdAt FROM users WHERE id = "${userId}"`;
    const [ rows ] = await ydb.withSession(session => session.executeQuery(query, {}, Ydb.AUTO_TX_RO ));

    assert.deepEqual(rows, [{
      id: userId,
      name: 'Alice',
      isAdmin: true,
      createdAt: new Date('2021-04-17T09:48:19Z'),
    }]);
  });

  it('error on upsert in read-only transaction', async () => {
    const userId = String(Date.now());

    const promise = ydb.withSession(session => session.executeQuery(`
      UPSERT INTO users (id, name, isAdmin, createdAt)
      VALUES ("${userId}", "Alice", true, Datetime("2021-04-17T09:48:19Z"))
    `, {}, Ydb.AUTO_TX_RO));

    await assert.rejects(promise, /Operation 'Upsert' can't be performed in read only transaction/);
  });

});

