/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    const str = paragraph.toLowerCase();
    const array = str.match(/[a-z]+/g);
    const hash = {};
    for(let i=0;i<array.length;i++){
        if (banned.indexOf(array[i]) === -1) {
            if(array[i] in hash){
                hash[array[i]]++;
            } else {
                hash[array[i]] = 1;
            }   
        }
    }
    const max = Math.max.apply(this, Object.values(hash));
    for (let i in hash) {
        if (hash[i] === max) {
            return i;
        }
    }
};