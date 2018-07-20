/**
 * @param {string} s
 * @return {number}
 */
// "love live! mu'sic forever" mu'sic算是一个单词
// 我以为我想的是对的，直到我遇到了", , , ,        a, eaefa"
var countSegments = function(s) {
    let reg = /[^\s]+/g;
    let array = s.match(reg);
    if (!array) {
        return 0;
    } else {
        return array.length;
    }
};