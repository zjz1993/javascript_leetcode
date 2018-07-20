/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let slow=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=0){
            if(nums[slow]!=0){
                slow++;
            } else {
                let t=nums[i];
                nums[i]=nums[slow];
                nums[slow]=t;
                slow++;
            }
        }
    }
};