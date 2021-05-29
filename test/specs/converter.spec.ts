describe('converter', () => {

  // see: https://cloud.yandex.ru/docs/ydb/yql/reference/builtins/basic#data-type-literals
  it('ydb to js', async () => {
    const [ rows ] = await ydb.executeYql(`
      SELECT
        true as trueCol,
        false as falseCol,

        1 as numCol,
        Int8("1") as int8Col,
        Int16("-1") as int16Col,
        Int32("1") as int32Col,
        Uint32("1") as uint32Col,
        Int64("9007199254740993") as int64Col,
        Uint64("18014398509481982") as uint64Col,
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

        null as nullCol;
    `);

    assert.deepEqual(rows, [{
      trueCol: true,
      falseCol: false,

      numCol: 1,
      int8Col: 1,
      int16Col: -1,
      int32Col: 1,
      uint32Col: 1,
      int64Col: 9007199254740993n,
      uint64Col: 18014398509481982n,
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

  // See: https://cloud.yandex.ru/docs/ydb/yql/reference/syntax/declare
  it('js to ydb', async () => {
    const [ rows ] = await ydb.executeYql(`
      DECLARE $trueParam AS bool;

      DECLARE $uint8Param AS uint8;
      DECLARE $int32Param AS int32;
      DECLARE $uint32Param AS uint32;
      DECLARE $int64Param AS int64;
      DECLARE $uint64Param AS uint64;
      DECLARE $floatParam AS float;
      DECLARE $doubleParam AS double;

      DECLARE $dateParam as date;
      DECLARE $datetimeParam as datetime;
      DECLARE $timestampParam as timestamp;

      DECLARE $stringParam as string;
      DECLARE $utf8Param as utf8;

      DECLARE $jsonParam as json;
      DECLARE $jsonDocumentParam as jsonDocument;
      DECLARE $jsonDocumentParam2 as jsonDocument;

      DECLARE $nullParam AS bool?;

      SELECT
        $trueParam as trueCol,

        $uint8Param as uint8Col,
        $int32Param as int32Col,
        $uint32Param as uint32Col,
        $int64Param as int64Col,
        $uint64Param as uint64Col,
        $floatParam as floatCol,
        $doubleParam as doubleCol,

        $dateParam as dateCol,
        $datetimeParam as datetimeCol,
        $timestampParam as timestampCol,

        $stringParam as stringCol,
        $utf8Param as utf8Col,

        $jsonParam as jsonCol,
        $jsonDocumentParam as jsonDocumentCol,
        $jsonDocumentParam2 as jsonDocumentCol2,

        $nullParam as nullCol
    `, {
      $trueParam: true,

      $uint8Param: 1,
      $int32Param: 1,
      $uint32Param: 1,
      $int64Param: 9007199254740993n,
      $uint64Param: 18428729675200069632n,
      $floatParam: 1.2,
      $doubleParam: 1.3,

      $dateParam: new Date('2021-04-17T09:48:19.123Z'),
      $datetimeParam: new Date('2021-04-17T09:48:19.123Z'),
      $timestampParam: new Date('2021-04-17T09:48:19.123Z'),

      $stringParam: 'Alice',
      $utf8Param: 'привет',

      $jsonParam: { foo: 42 },
      $jsonDocumentParam: { foo: 42 },
      $jsonDocumentParam2: JSON.stringify({ foo: 42 }),

      $nullParam: null,
    });

    assert.deepEqual(rows, [{
      trueCol: true,

      uint8Col: 1,
      int32Col: 1,
      uint32Col: 1,
      int64Col: 9007199254740993n,
      uint64Col: 18428729675200069632n,
      floatCol: 1.2000000476837158,
      doubleCol: 1.3,

      dateCol: new Date('2021-04-17T00:00:00.000Z'),
      datetimeCol: new Date('2021-04-17T09:48:19Z'),
      timestampCol: new Date('2021-04-17T09:48:19.123Z'),

      stringCol: 'Alice',
      utf8Col: 'привет',

      jsonCol: '{"foo":42}',
      jsonDocumentCol: '{"foo":42}',
      jsonDocumentCol2: '{"foo":42}',

      nullCol: null,
    }]);
  });

});

