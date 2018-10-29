var twoSum = function(nums,target){
  //nums.sort();
  var obj={}
  for(let i=0;i<nums.length;i++){
    let temp = target-nums[i];
    if (obj.hasOwnProperty(temp)){
      return [i, obj[temp]];
    }
    obj[nums[i]]=i;
  }
}