/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let hash = {};
    for(let i=0;i<nums.length;i++){
        if(nums[i] in hash) {
            hash[nums[i]]++;
        } else {
            hash[nums[i]]=1;
        }
    }
    for(let i in hash) {
        if (hash[i] >= 2){
            return true;
        }
    }
    return false;
};