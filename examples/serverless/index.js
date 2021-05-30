/**
 * Example of using ydb-sdk-lite in serverless function.
 */
const { Ydb } = require('ydb-sdk-lite');

const dbName = process.env.YDB_NAME;
const tablePathPrefix = process.env.YDB_PREFIX;

let ydb;

exports.handler = async (event, context) => {
  const iamToken = context.token?.access_token;
  ydb = (ydb && ydb.iamToken === iamToken) ? ydb : new Ydb({ dbName, iamToken, tablePathPrefix });

  const [ users ] = await ydb.executeDataQuery('SELECT * FROM users');

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    isBase64Encoded: false,
    body: JSON.stringify(users),
  };
};
