/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let str1 = (num).toString(2);
    let str2 = ''
    for(let i=0;i<str1.length;i++){
        if(str1[i] === '0') {
            str2+='1'
        } else if (str1[i] === '1') {
            str2+='0';
        }
    }
    return parseInt(str2,2);
};