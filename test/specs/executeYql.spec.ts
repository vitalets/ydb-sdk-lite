describe('executeYql', () => {
  it('upsert and select data from table', async () => {
    const userId = String(Date.now());

    await ydb.executeYql(`
      UPSERT INTO users (id, name, isAdmin, createdAt)
      VALUES ("${userId}", "Alice", true, Datetime("2021-04-17T09:48:19Z"))
    `);

    const [ rows ] = await ydb.executeYql(`
      DECLARE $userId AS String;
      SELECT id, name, isAdmin, createdAt FROM users WHERE id = $userId;
    `, { userId });

    assert.deepEqual(rows, [{
      id: userId,
      name: 'Alice',
      isAdmin: true,
      createdAt: new Date('2021-04-17T09:48:19Z'),
    }]);
  });

  it('show formatted issues and query text on error', async () => {
    const promise = ydb.executeYql(`bla bla bla`);

    await assert.rejects(promise, /\[issueCode: 0\] Unexpected token 'bla'/);
    await assert.rejects(promise, /Query: PRAGMA TablePathPrefix/);
  });
});

