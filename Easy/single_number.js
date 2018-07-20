/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let count = nums[0]^nums[1];
    for(let i=2;i<nums.length;i++){
        count=count^nums[i];
    }
    return count;
};