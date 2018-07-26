/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let condition1 = word.toUpperCase() === word;
    let condition2 = word.toLowerCase() === word;
    let condition3 = word.replace(/^[A-Z][a-z]+/g, '') === '';
    return condition1 || condition2 || condition3;
};