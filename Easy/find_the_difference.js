/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  let obj = {};
  for(let i=0;i<s.length;i++){
      if(s[i] in obj) {
          obj[s[i]]++;
      } else {
          obj[s[i]] = 1;
      }
  }
  for(let i=0;i<t.length;i++){
      if(t[i] in obj) {
          obj[t[i]]--;
      } else {
          obj[t[i]] = 1;
      }
  }
  for (item in obj) {
      if(obj[item] !== 0) {
          return item;
      }
  }
};