/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
var numberOfLines = function(widths, S) {
  let count = 0;
  let length = 0;
  for(var i=0;i<S.length;i++){
    let index = S[i].charCodeAt(0) - 97;
    if(widths[index] + length <= 100){
       length+=widths[index];
     } else {
       count++;
       length=0;
       length+=widths[index];
     }
  }
  return [count+1,length];
}