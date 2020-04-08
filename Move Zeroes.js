/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let p1 = p2 = newVal = currentVal = 0
  while(p1 < nums.length) {
    currentVal = nums[p1]
    if(currentVal === 0) {
      while(p2 < nums.length && p2 >= p1) {
        if (nums[p2]) {
          newVal = nums[p2]
          nums[p1] = newVal
          nums[p2] = currentVal
          break
        }
        p2++
      }
    }
    p1++
    p2++
  }
  // console.log(nums)
};

console.log(moveZeroes([0,1,0,3,12]))