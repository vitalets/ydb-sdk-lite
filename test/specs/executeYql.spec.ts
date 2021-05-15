describe('executeYql', () => {

  it('upsert and select data', async () => {
    const userId = Date.now();
    
    await ydb.executeYql(`
      UPSERT INTO users (id, name, isAdmin, createdAt)
      VALUES (${userId}, "Alice", true, Datetime("2021-04-17T09:48:19Z"))
    `);

    const { resultSets } = await ydb.executeYql(`
      SELECT id, name, isAdmin, createdAt FROM users WHERE id = ${userId}
    `);

    assert.equal(resultSets.length, 1);
    assert.equal(resultSets[0].columns!.length, 4);
    // assert.deepEqual(resultSets[0].rows, []);
  });

  // upsert and select data via params
});

