var maxSubArray = function(nums) {
  let globalSum = currentSum = nums[0];
  nums.forEach((element, index) => {
    if(index === 0) return;
    currentSum = Math.max(element, element+currentSum)
    if(currentSum > globalSum) {
      globalSum = currentSum;
    }
  });

  return globalSum
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))