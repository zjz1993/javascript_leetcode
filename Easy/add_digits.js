/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let number = num;
    let sum=0;
    while(number > 0) {
      sum+=parseInt(number%10,10);
      number=parseInt(number/10,10);
    }
    if (sum >= 10) {
      return addDigits(sum)
    } else {
      return sum; 
    }
};