/** @param {Array} list */
/**@param {Number} number */
/**@param {Number} left */
/**@param {Number} right */
/** @returns {Number} */
function bSearch(list, number, left, right) {
  if(left > right) return -1;
  
  const mid = parseInt((right+left)/2)

  if (list[mid] === number) return mid

  // left sub-array is sorted
  if(list[left] <= list[mid]) { 
      
      // Check presence
      if(list[left] <= number && list[mid] >= number) 
        return bSearch(list, number, left, mid-1)
      
      return bSearch(list, number, mid+1, right)
   }

  // right sub-array is sorted
  if(number <= list[right] && number >= list[mid]) return bSearch(list, number, mid+1, right)
  
  return bSearch(list, number, left, mid-1) 
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    return bSearch(nums, target, 0, nums.length-1)
};

const list = [3,1]
console.log(bSearch(list,1,0,list.length-1))