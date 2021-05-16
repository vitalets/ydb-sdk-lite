import Long from 'long';

describe('executeYql', () => {

  // see: https://cloud.yandex.ru/docs/ydb/yql/reference/builtins/basic#data-type-literals
  it('select primitive values', async () => {
    const [ rows ] = await ydb.executeYql(`
      SELECT
        true as trueCol,
        false as falseCol,

        1 as numCol,
        Int8("1") as int8Col,
        Int16("-1") as int16Col,
        Int32("1") as int32Col,
        Uint32("1") as uint32Col,
        Int64("1") as int64Col,
        Uint64("1") as uint64Col,
        Float("1.2") as floatCol,
        Double("1.3") as doubleCol,
        --Decimal("1.44", 5, 2) as decimalCol,

        Date("2021-04-17") as dateCol,
        Datetime("2021-04-17T09:48:19Z") as datetimeCol,
        Timestamp("2021-04-17T09:48:19.123456Z") as timestampCol,
        --Interval("P1DT2H") as intervalCol,

        "Alice" as strCol,
        Utf8("привет") as utf8Col,

        Json(@@{"foo":42}@@) as jsonCol,
        JsonDocument(@@{"foo":42}@@) as jsonDocumentCol,

        null as nullCol
    `);

    assert.deepEqual(rows, [{
      trueCol: true,
      falseCol: false,

      numCol: 1,
      int8Col: 1,
      int16Col: -1,
      int32Col: 1,
      uint32Col: 1,
      int64Col: Long.fromNumber(1, false),
      uint64Col: Long.fromNumber(1, true),
      floatCol: 1.2000000476837158,
      doubleCol: 1.3,

      strCol: 'Alice',
      utf8Col: 'привет',

      dateCol: new Date('2021-04-17'),
      datetimeCol: new Date('2021-04-17T09:48:19Z'),
      timestampCol: new Date('2021-04-17T09:48:19.123Z'),

      jsonCol: '{"foo":42}',
      jsonDocumentCol: '{"foo":42}',

      nullCol: null
    }]);
  });

  it('upsert and select data from table', async () => {
    const userId = String(Date.now());

    await ydb.executeYql(`
      UPSERT INTO users (id, name, isAdmin, createdAt)
      VALUES ("${userId}", "Alice", true, Datetime("2021-04-17T09:48:19Z"))
    `);

    const [ rows ] = await ydb.executeYql(`
      SELECT id, name, isAdmin, createdAt FROM users WHERE id = "${userId}"
    `);

    assert.deepEqual(rows, [{
      id: userId,
      name: 'Alice',
      isAdmin: true,
      createdAt: new Date('2021-04-17T09:48:19Z'),
    }]);
  });

  // upsert and select data via params
});

