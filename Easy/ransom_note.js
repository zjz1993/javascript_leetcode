/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const hash = (str) => {
      const obj = {};
      for (let i=0;i<str.length;i++){
        if(obj[str[i]]) {
          obj[str[i]]++;
        } else {
          obj[str[i]] = 1;
        }
      }
      return obj;
    }
    const hashA = hash(ransomNote);
    const hashB = hash(magazine);
    for(let i in hashA) {
      if (!hashB[i] || hashA[i] > hashB[i]) {
        return false;
      }
    }
    return true;
};