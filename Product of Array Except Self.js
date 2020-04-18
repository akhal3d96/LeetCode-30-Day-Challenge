/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  // Forward Array
  const forward = Array(nums.length)

  nums.forEach((e, i, arr) => {
    if (i === 0) { forward[i] = 1 }
    else { forward[i] = arr[i-1] * forward[i-1] }
  })

  // Backward Array
  const backward = Array(nums.length)

  nums.reverse().forEach((e, i, arr) => {
    if (i === 0) { backward[i] = 1 }
    else { backward[i] = arr[i-1] * backward[i-1] }
  })

  return backward
  .reverse()
  .map((e, i) => e * forward[i])
};

console.log(productExceptSelf([1,2,3,4]))