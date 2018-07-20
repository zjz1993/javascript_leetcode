/**
 * @param {string} s
 * @return {number}
 */
// 坑1：空字符串
// 坑2: 字符串尾部有不限数量的空格;
var lengthOfLastWord = function(s) {
  let array = s.trim().match(/[a-zA-Z]+$/g);
  if (!array) {
    return 0;
  } else {
    return array[0].length; 
  }
};