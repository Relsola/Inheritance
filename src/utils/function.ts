/** 函数柯里化 */
export function curry<T extends (...args: any[]) => any>(
  fn: T,
  arity: number = fn.length
) {
  const curried = (
    ...rest: any[]
  ): ReturnType<T> | ((...args: any[]) => any) => {
    return rest.length >= arity
      ? fn(...rest)
      : (...args: any[]) => curried(...rest, ...args);
  };
  return curried;
}
