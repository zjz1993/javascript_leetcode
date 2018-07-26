/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
 // 要注意1不是质数，不要把1给统计进去了。
var countPrimeSetBits = function(L, R) {
    let result = 0;
    for(let i=L;i<=R;i++){
      let str = (i).toString(2);
      let count = 0;
      for(let j=0;j<str.length;j++){
        if(str[j] === '1') {
          count++;
        }
      }
      if (isPrime(count)) {
        result++;
      }
    }
    return result;
};
function isPrime(num){
  if (num ==1) {
    return false;
  } else {
    for(let i=2;i<num;i++){
      if (num%i === 0) {
        return false;
      }
    }
      return true;
    }
}