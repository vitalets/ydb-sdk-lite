// see: https://stackoverflow.com/questions/63024617/how-to-reference-all-parameters-except-first-in-typescript
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type DropFirst<T extends unknown[]> = T extends [any, ...infer U] ? U : never;

export function appendMessageToError(e: Error, message: string) {
  e.message = [ e.message, message ].join(' ');
  e.stack = `${e.name}: ${e.message}\n${(e.stack || '').split('\n').slice(1).join('\n')}`;
  return e;
}
