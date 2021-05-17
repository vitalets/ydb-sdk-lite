# ydb-sdk-lite
Lightweight implementation of [ydb-sdk](https://github.com/yandex-cloud/ydb-nodejs-sdk) for Node.js.
Mainly for usage in serverless functions.

## Comparison
|   | ydb-sdk-lite  | ydb-sdk |
| - | - | - |
| require time | ~30ms  | ~300ms  |
| size | tbd  | tbd  |
| parameters support | no  | yes  |

## Installation
```
npm i ydb-sdk-lite
```

## Usage
```js
const { Ydb } = require('ydb-sdk-lite');

const dbName = process.env.YDB_NAME;

let ydb;

exports.handler = async (event, ctx) => {
  // get iam token
  const iamToken = context.token?.access_token;

  // create ydb instance
  ydb = ydb || new Ydb({ dbName, iamToken });

  // execute yql query
  const query = 'select * from users';
  const [ users ] = await ydb.executeQuery(query);
  console.log(users);
  /*
   [
     {id: 1, name: 'Alice', created_at: Date('')},
     ...
   ]
  */

  // ...
};
```

## API Reference

## License
MIT @ [Vitaliy Potapov](https://github.com/vitalets)



