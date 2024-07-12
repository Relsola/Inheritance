/** 字符串插入 */
String.prototype.insert = function (index, string, number = 0) {
  return this.substring(0, index) + string + this.substring(index + number);
};
