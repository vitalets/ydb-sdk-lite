// see: https://cloud.yandex.ru/docs/ydb/yql/reference/builtins/basic#data-type-literals
// todo: support Interval("P1DT2H") as intervalCol,
// todo: support Decimal("1.44", 5, 2) as decimalCol,

describe('converter', () => {

  it('bool', async () => {
    const query = `
      DECLARE $trueParam AS bool;
      DECLARE $falseParam AS bool;

      SELECT
        true as trueCol,
        $trueParam AS trueParam,
        $falseParam AS falseParam;
    `;
    const params = {
      trueParam: true,
      falseParam: false,
    };
    const [ rows ] = await ydb.executeYql(query, params);

    assert.deepEqual(rows, [{
      trueCol: true,
      ...params,
    }]);
  });

  it('string', async () => {
    const query = `
      DECLARE $stringParam AS string;
      DECLARE $utf8Param AS utf8;

      SELECT
        $stringParam AS stringParam,
        $utf8Param AS utf8Param;
    `;
    const params = {
      stringParam: 'Alice',
      utf8Param: 'привет',
    };
    const [ rows ] = await ydb.executeYql(query, params);

    assert.deepEqual(rows, [ params ]);
  });

  it('json', async () => {
    const query = `
      DECLARE $jsonParam AS json;
      DECLARE $jsonDocumentParam AS jsonDocument;
      DECLARE $jsonDocumentParam2 AS jsonDocument;

      SELECT
        Json(@@{"foo":42}@@) AS jsonCol,
        JsonDocument(@@{"foo":42}@@) AS jsonDocumentCol,
        $jsonParam AS jsonParam,
        $jsonDocumentParam AS jsonDocumentParam,
        $jsonDocumentParam2 AS jsonDocumentParam2;
    `;
    const params = {
      jsonParam: { foo: 42 },
      jsonDocumentParam: { foo: 42 },
      jsonDocumentParam2: JSON.stringify({ foo: 42 }),
    };
    const [rows] = await ydb.executeYql(query, params);

    assert.deepEqual(rows, [{
      jsonCol: '{"foo":42}',
      jsonDocumentCol: '{"foo":42}',
      jsonParam: '{"foo":42}',
      jsonDocumentParam: '{"foo":42}',
      jsonDocumentParam2: '{"foo":42}',
    }]);
  });

  it('date', async () => {
    const query = `
      DECLARE $dateParam AS date;
      DECLARE $datetimeParam AS datetime;
      DECLARE $timestampParam AS timestamp;
      DECLARE $timestampParam2 AS timestamp;

      SELECT
        Date("2021-04-17") AS dateCol,
        $dateParam AS dateParam,
        $datetimeParam AS datetimeParam,
        $timestampParam AS timestampParam,
        $timestampParam2 AS timestampParam2;
    `;
    const params = {
      dateParam: new Date('2021-04-17T09:48:19.123Z'),
      datetimeParam: new Date('2021-04-17T09:48:19.123Z'),
      timestampParam: new Date('2021-04-17T09:48:19.123Z'),
      timestampParam2: new Date('2021-04-17T09:48:19.123Z').valueOf(),
    };
    const [ rows ] = await ydb.executeYql(query, params);

    assert.deepEqual(rows, [{
      dateCol: new Date('2021-04-17T00:00:00.000Z'),
      dateParam: new Date('2021-04-17T00:00:00.000Z'),
      datetimeParam: new Date('2021-04-17T09:48:19.000Z'),
      timestampParam: new Date('2021-04-17T09:48:19.123Z'),
      timestampParam2: new Date('2021-04-17T09:48:19.123Z'),
    }]);
  });

  it('number', async () => {
    const query = `
      DECLARE $uint8Param AS uint8;
      DECLARE $int32Param AS int32;
      DECLARE $uint32Param AS uint32;
      DECLARE $int64Param AS int64;
      DECLARE $uint64Param AS uint64;
      DECLARE $floatParam AS float;
      DECLARE $doubleParam AS double;

      SELECT
        1 AS numCol,
        $uint8Param AS uint8Param,
        $int32Param AS int32Param,
        $uint32Param AS uint32Param,
        $int64Param AS int64Param,
        $uint64Param AS uint64Param,
        $floatParam AS floatParam,
        $doubleParam AS doubleParam;
    `;
    const params = {
      uint8Param: 1,
      int32Param: 1,
      uint32Param: 1,
      int64Param: 9007199254740993n,
      uint64Param: 18428729675200069632n,
      floatParam: 1.2,
      doubleParam: 1.3,
    };
    const [ rows ] = await ydb.executeYql(query, params);

    assert.deepEqual(rows, [{
      numCol: 1,
      ...params,
      floatParam: 1.2000000476837158, // float does not return the same value..
    }]);
  });

  it('nullable', async () => {
    const query = `
      DECLARE $boolParam AS bool?;
      DECLARE $dateParam AS date?;

      SELECT
        null AS nullCol,
        $boolParam AS boolParam,
        $dateParam AS dateParam;
    `;
    const params = {
      boolParam: null,
      dateParam: undefined,
    };
    const [ rows ] = await ydb.executeYql(query, params);

    assert.deepEqual(rows, [{
      nullCol: null,
      boolParam: null,
      dateParam: null,
    }]);
  });
});

