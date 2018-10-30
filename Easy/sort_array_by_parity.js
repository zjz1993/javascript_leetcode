/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    let evenNumber = [];
    let oddNumber = [];
    A.forEach((item) => {
        if (item % 2 === 0){
            evenNumber.push(item);
        } else {
            oddNumber.push(item);
        }
    })
    return evenNumber.concat(oddNumber);
};