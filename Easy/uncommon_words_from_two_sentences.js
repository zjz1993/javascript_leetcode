/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
    const makeHash = (array) => {
        let obj = {};
        for(let i=0;i<array.length;i++){
            if (obj[array[i]]) {
                obj[array[i]]++;
            } else {
                obj[array[i]] = 1;
            }
        }
        return obj;
    }
    let result=[];
    let hashA = makeHash(A.match(/[a-zA-Z]+/g));
    let hashB = makeHash(B.match(/[a-zA-Z]+/g));
    for(let i in hashA) {
        if (hashA[i] === 1 && !hashB[i]) {
            result.push(i);
        }
    }
    for(let i in hashB) {
        if (hashB[i] === 1 && !hashA[i]) {
            result.push(i);
        }
    }
    return result;    
};