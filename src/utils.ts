// see: https://stackoverflow.com/questions/63024617/how-to-reference-all-parameters-except-first-in-typescript
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type DropFirst<T extends unknown[]> = T extends [any, ...infer U] ? U : never;

export function appendMessageToError(e: Error, message: string) {
  if (!/^\s/.test(message)) message = ` ${message}`;
  const newMessage = `${e.message}${message}`;
  e.stack = `${e.name}: ${newMessage}\n${(e.stack || '').split('\n').slice(1).join('\n')}`;
  // important to assign e.message AFTER e.stack (to avoid duplication in stack)
  e.message = newMessage;
  return e;
}
