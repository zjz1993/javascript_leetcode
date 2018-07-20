/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let count = 0;
    let str1 = (x).toString(2);
    let str2 = (y).toString(2);
    let maxLen = Math.max(str1.length,str2.length);
    str1 = str1.padStart(maxLen, '0');
    str2 = str2.padStart(maxLen, '0');
    for(let i=0;i<maxLen;i++){
        if(str1[i] !== str2[i]) {
            count++;
        }
    }
    return count;
};