/**
 * 在字符串指定位置插入另一个字符串，可选地替换掉原字符串中的一部分字符。
 * @param target 原字符串。
 * @param index 插入的起始位置。如果为负数，则表示从字符串末尾开始的偏移量。
 * @param string 要插入的字符串。
 * @param deleteCount 可选，从插入位置开始要删除的字符数，默认为0。
 * @returns 返回修改后的字符串。
 */
export function insertString(
  target: string,
  index: number,
  string: string,
  deleteCount: number = 0
) {
  if (typeof target !== 'string' || typeof string !== 'string') {
    throw new Error(
      'Both target and string must be of type string in insertString'
    );
  }
  if (typeof index !== 'number' || typeof deleteCount !== 'number') {
    throw new Error(
      'Both index and deleteCount must be a number in insertString'
    );
  }

  if (index < 0) {
    index = Math.max(0, target.length + index);
  } else {
    index = Math.min(index, target.length);
  }

  return target.slice(0, index) + string + target.slice(index + deleteCount);
}


