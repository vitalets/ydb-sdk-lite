# ydb-sdk-lite
Lightweight implementation of [ydb-sdk](https://github.com/yandex-cloud/ydb-nodejs-sdk) for Node.js.
Mainly for usage in serverless functions.

## Comparison
|   | ydb-sdk-lite  | ydb-sdk |
| - | - | - |
| require time | ~100ms  | ~300ms  |
| size | tbd  | tbd  |
| parameters support | no  | yes  |

## Installation
```
npm i ydb-sdk-lite
```

## Usage
```js
const { Ydb } = require('ydb-sdk-lite');

// create Ydb client
const ydb = new Ydb({ dbName: 'xxx', iamToken: 'yyy', tablePathPrefix: 'zzz' });

// execute single query (DML only)
const [ users ] = await ydb.executeDataQuery('SELECT * FROM users');

// execute single query with params
const query = `
  DECLARE $userId AS int32;
  SELECT * FROM users WHERE userId = $userId;
`;
const [ users ] = await ydb.executeDataQuery(query, { $userId: 42 });

// execute any YQL (DDL + DML)
await ydb.executeYql('DROP TABLE users');
```

[Full example](https://github.com/vitalets/ydb-sdk-lite/tree/main/examples/serverless) of using `ydb-sdk-lite` in serverless function.

## API Reference
tbd

## License
MIT @ [Vitaliy Potapov](https://github.com/vitalets)



