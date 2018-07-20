/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let result = '';
    let wordArray = s.match(/[aeiouAEIOU]/g);
    if (!wordArray) {
        return s;
    } else {
        for(let i=0,j=wordArray.length -1;i<s.length;i++){
            if (wordArray.indexOf(s[i]) === -1) {
                result += s[i];
            } else {
                result += wordArray[j--];
            }
        }
        return result;
    }
};