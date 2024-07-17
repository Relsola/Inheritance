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