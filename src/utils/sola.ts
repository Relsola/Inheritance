/** 获取网页URL参数 */
export function getSearchParams(url?: string): Record<string, string> {
  url ||= window.location.href;
  url = url.substring(url.lastIndexOf('?'));

  const params: Record<string, string> = {};
  new URLSearchParams(url).forEach((value, key) => (params[key] = value));

  return params;
}

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

  return (...args: Parameters<T>) =>
    ran ? result : (ran = true) && (result = fn(...args));
}
