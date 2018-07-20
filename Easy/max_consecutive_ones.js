/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let count=0;
    let countArray=[];
    for (let i=0;i<nums.length;i++){
        if(nums[i]!==1){
            countArray.push(count);
            count=0;
        } else {
            count++;
        }
    }
    countArray.push(count);
    return Math.max.apply(this,countArray);
};