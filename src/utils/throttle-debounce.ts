type ThrottleDebounce = (
  delay: number,
  callback: (...args: unknown[]) => void,
  immediate?: boolean
) => (this: unknown, ...args: unknown[]) => void;

const throttle: ThrottleDebounce = (delay, callback, immediate = true) => {
  let lastExec: number = 0;

  return function (this: unknown, ...args: unknown[]) {
    let elapsed: number = Date.now() - lastExec;

    if (elapsed <= delay) return;

    lastExec = Date.now();

    if (immediate) callback.apply(this, args);
    else setTimeout(() => callback.apply(this, args), delay);
  };
};

const debounce: ThrottleDebounce = (delay, callback, immediate = true) => {
  let timeoutID: ReturnType<typeof setTimeout> | undefined;

  return function (this: unknown, ...args: unknown[]) {
    if (immediate && !timeoutID) callback.apply(this, args);

    if (timeoutID) clearTimeout(timeoutID);

    timeoutID = setTimeout(() => {
      if (!immediate) callback.apply(this, args);
      timeoutID = undefined;
    }, delay);
  };
};

export { throttle, debounce };
