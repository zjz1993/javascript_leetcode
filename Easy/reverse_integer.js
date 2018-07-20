/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const max = Math.pow(2,31);
    let result = '';
    if (x > 0){
        result = x.toString().split('').reverse().join('');
    } else {
        result = '-' + x.toString().split('').reverse().join('');
    }
    let reverseNumber = parseInt(result, 10);
    if (reverseNumber > max-1 || reverseNumber < -max) {
        return 0;
    } else {
        return reverseNumber;
    }
};