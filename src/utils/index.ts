/** 记忆函数 */
export function memoize<T extends (...args: any[]) => any>(fn: T) {
  type R = ReturnType<T>;
  const cache = new Map<string, R>();

  const cached = function (...args: Parameters<T>): R {
    const key = JSON.stringify(args);
    !cache.has(key) && cache.set(key, fn(...args));
    return cache.get(key)!;
  };

  cached.cache = cache;
  return cached;
}

/** 函数只执行一次 */
export function once<T extends (...args: any[]) => any>(fn: T) {
  let ran: boolean = false;
  let result: ReturnType<T>;

  return (...args: Parameters<T>) => {
    if (ran) return result;

    ran = true;
    result = fn(...args);
    return result;
  };
}

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

/** 洗牌打乱函数  --浅克隆-- */
export function shuffle(arr: any[]) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
