interface IconProps {
  name: string;
  classes?: string;
  style?: React.CSSProperties;
  fill?: string;
  handleClick?: React.MouseEventHandler<SVGSVGElement> | undefined;
}

/** 字符串扩展方法 */
interface String {
  /**
   * @description 在字符串指定位置插入另一个字符串。
   * @param index 插入的起始位置。
   * @param string 要插入的字符串。
   * @param number 从插入位置开始，原字符串中将被替换的字符数。
   * @returns 返回修改后的字符串。
   */
  insert(index: number, string: string, number?: number): string;
}
