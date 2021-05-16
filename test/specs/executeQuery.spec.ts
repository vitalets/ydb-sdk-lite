describe('executeQuery', () => {

  it('upsert and select data', async () => {
    const userId = String(Date.now());

    await ydb.withSession(session => session.executeQuery(`
      UPSERT INTO users (id, name, isAdmin, createdAt)
      VALUES ("${userId}", "Alice", true, Datetime("2021-04-17T09:48:19Z"))
    `));

    const [ rows ] = await ydb.withSession(session => session.executeQuery(`
      SELECT id, name, isAdmin, createdAt FROM users WHERE id = "${userId}"
    `));

    assert.deepEqual(rows, [{
      id: userId,
      name: 'Alice',
      isAdmin: true,
      createdAt: new Date('2021-04-17T09:48:19Z'),
    }]);
  });

});

