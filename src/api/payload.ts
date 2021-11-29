import { Ydb } from '../../proto/bundle';
import { MissingOperation, MissingValue, YdbError } from './errors';

export interface GrpcResponse {
  operation?: (Ydb.Operations.IOperation|null);
}

export function getOperationPayload(response: GrpcResponse): Uint8Array {
  const { operation } = response;

  if (!operation) {
    throw new MissingOperation('No operation in response!');
  }

  YdbError.checkStatus(operation);

  const value = operation.result?.value;
  if (!value) {
    throw new MissingValue('Missing operation result value!');
  }

  return value;
}
