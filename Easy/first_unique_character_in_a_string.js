/**
 * @param {string} s
 * @return {number}
 */

// 坑1：注意只有一个字符的时候，输出的是0
// 坑2：输入为空是输出是-1
var firstUniqChar = function(s) {
    if (s === '') {
        return -1;
    } else {
        let hash = {};
        let indexArr = [];
        for(let i=0;i<s.length;i++){
            if (s[i] in hash) {
                hash[s[i]]++
            } else {
                hash[s[i]] = 1;
            }
        }
        for(let i=0;i<s.length;i++){
            if(hash[s[i]] === 1) {
                indexArr.push(i);
            }
        }
        if (indexArr.length === 0) {
            return -1;
        } else {
            return Math.min.apply(this,indexArr);
        }
    }
};