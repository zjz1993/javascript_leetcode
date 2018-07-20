/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  let string = ''
  for(let i=0;i<str.length;i++){
      if (/[A-Z]/.test(str[i])) {
          let unicode = str.charCodeAt(i);
          let char = String.fromCharCode(unicode + 32);
          string+=char;
      } else {
          string+=str[i];
      }
  }
  return string;
};