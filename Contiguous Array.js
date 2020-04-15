function isBalanced(arr) {
  return arr.reduct((cur, acc) => cur+acc) === 0
}
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
  const map = new Map()
  map.set(0, -1)
  let count = 0
  let maxSum = 0
  nums.forEach((e, i) => {
    if(e === 0) count++
    else { count-- }

    if(map.has(count)) {
      maxSum = Math.max(maxSum, i-map.get(count))
    } else {
      map.set(count, i)
    }
  })

  return maxSum
};

console.log(findMaxLength([0,1]))