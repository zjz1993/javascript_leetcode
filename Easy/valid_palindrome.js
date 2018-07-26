/**
 * @param {string} s
 * @return {boolean}
 */
 // 先把字符串转成小写，因为不计大小写
 // 然后把非字母和数字的部分全部替换掉，最后再对处理过后的字符串进行比较。
var isPalindrome = function(s) {
    let string = s.toLowerCase();
    if (string === '') {
        return true;
    } else {
        let str = string.replace(/[^a-z0-9]/g,'');
        return str === str.split('').reverse().join('')
    }
};