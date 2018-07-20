/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let resultStr='';
    const strArray=s.split(' ').map((item) => {
        return item.split('').reverse().join('');
    });
    for(let i=0;i<strArray.length;i++){
        if(i!=strArray.length-1) {
           resultStr=resultStr+strArray[i]+' ' 
        } else {
            resultStr=resultStr+strArray[i]
        }
    }
    return resultStr;
};