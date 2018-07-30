/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    let result = ''
    let wordArray=str.match(/[^\s]+/g);
    if (!wordArray) {
        return '';
    } else {
        wordArray.reverse();
        for(let i=0;i<wordArray.length;i++){
            result+=wordArray[i]+' ';
        }
        return result.trim();   
    }
};