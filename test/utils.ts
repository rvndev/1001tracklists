// Write a typesafe TypeScript function that omits a property from an object and preserves the type, omitting the removed property
export function omit<T extends object, K extends keyof T>(obj: T, key: K): Omit<T, K> {
  return Object.fromEntries(Object.entries(obj).filter(([k]) => k !== key)) as Omit<T, K>;
}
