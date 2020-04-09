const _ = require('lodash')
/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) {
  return _.sortBy(arr)
      .reduce((acc, cur, i, sortedArr) => {
        if(_.sortedIndexOf(sortedArr, cur+1) !== -1) {
          return acc+1
        }
        return acc
      }, 0)  
};

console.log(countElements([1,1,3,3,5,5,7,7]))