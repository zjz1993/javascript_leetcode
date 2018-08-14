/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    let number = num > 0 ? num : -num;
    let array = [];
    if (num === 0) {
      array.push(0);
    }
    while(number > 0) {
      array.push(number % 7);
      number = parseInt(number / 7, 10);
    }
    if (num < 0){
      return '-' + array.reverse().join('')
    } else {
      return array.reverse().join(''); 
    }
};