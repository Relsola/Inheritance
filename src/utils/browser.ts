/** 复制文本到剪贴板 */
export async function clipboard(text: string) {
  try {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }

    const input = document.createElement('input');
    input.setAttribute('readonly', 'readonly');
    input.value = text;
    input.style.position = 'absolute';
    input.style.left = '-9999px';
    document.body.appendChild(input);

    const selection = document.getSelection()!;
    const selected = selection.rangeCount > 0 ? selection.getRangeAt(0) : false;

    input.select();
    const result = document.execCommand('copy');
    document.body.removeChild(input);

    if (selected) {
      selection.removeAllRanges();
      selection.addRange(selected);
    }

    return result;
  } catch (e) {
    console.warn('clipboard error:', e);
    return false;
  }
}

/** 动画帧回调操作，默认起始调用 */
export function recordAnimationFrames(
  callback: () => void,
  autoStart: boolean = true
) {
  let running: boolean = false,
    raf: number;

  const stop = (): void => {
    if (!running) return;
    running = false;
    cancelAnimationFrame(raf);
  };

  const run = (): void => {
    raf = requestAnimationFrame(() => {
      callback();
      if (running) run();
    });
  };

  const start = (): void => {
    if (running) return;
    running = true;
    run();
  };

  if (autoStart) start();

  return { start, stop };
}

/** 点击元素外面触发回调，返回一个事件移除函数 */
export function clickOutside(element: HTMLElement, callback: () => void) {
  const handleClickOutside = (e: MouseEvent) =>
    !element.contains(e.target as Node) && callback();

  document.addEventListener('click', handleClickOutside);

  return () => document.removeEventListener('click', handleClickOutside);
}

/** 获取网页URL参数 */
export function getSearchParams(url?: string): Record<string, string> {
  url ||= window.location.href;
  url = url.substring(url.lastIndexOf('?'));

  const params: Record<string, string> = {};
  new URLSearchParams(url).forEach((value, key) => (params[key] = value));

  return params;
}
