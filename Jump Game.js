/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  if(nums.length === 1) return true
  let from = 0
  let to = 0
  let can_reach = -1
  while(to < nums.length) {
    for (let i = from; i <= to; i++) {
      can_reach = Math.max(can_reach, i + nums[i])
    }

    if(can_reach >= nums.length - 1) return true;
    
    from = to + 1
    to = can_reach

    if(from > to) return false
  }
  return false
};

console.log(canJump([2,0]))