/** 在字符串指定位置插入另一个字符串，可选地替换掉原字符串中的一部分字符 */
export function insertString(
  target: string,
  index: number,
  string: string,
  deleteCount: number = 0
) {
  index =
    index < 0
      ? Math.max(0, target.length + index)
      : Math.min(index, target.length);

  deleteCount = Math.max(0, deleteCount);

  return target.slice(0, index) + string + target.slice(index + deleteCount);
}
