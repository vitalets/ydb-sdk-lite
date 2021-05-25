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
Usage in serverless function:
```js
const { Ydb } = require('ydb-sdk-lite');

const ydb = new Ydb({ dbName: 'xxx', iamToken: 'yyy' });
const [ users ] = await ydb.executeDataQuery('select * from users');

console.log(users);
  /*
   [
     {id: 1, name: 'Alice', created_at: Date('')},
     ...
   ]
  */
```

## API Reference
tbd

## License
MIT @ [Vitaliy Potapov](https://github.com/vitalets)



