/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = function(findNums, nums) {
    let result=[];
    let findFlag=false;
    for(let i=0;i<findNums.length;i++){
        findFlag=false;
        let index = nums.indexOf(findNums[i]);
        for(let j=index+1;j<nums.length;j++){
            if(nums[j]>findNums[i]){
                result.push(nums[j]);
                findFlag=true;
                break;
            }
        }
        if(!findFlag){
            result.push(-1);
        }
    }
    return result;
};