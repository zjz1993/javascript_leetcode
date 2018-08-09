/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const char = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    const result = words.map((item) => {
        let string = ''
        for(let i=0;i<item.length;i++){
            string+=char[item[i].charCodeAt(0) - 97];
        }
        return string;
    })
    return [...new Set(result)].length;
};