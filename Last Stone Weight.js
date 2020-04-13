const _ = require('lodash')
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  if (stones.length == 1) return stones[0];
  else if (stones.length == 0) return 0;

  let stonesSorted = _.sortBy(stones)

  while (stonesSorted.length > 1) {
    stonesSorted = _.sortBy(stonesSorted)

    const a = stonesSorted.pop()
    const b = stonesSorted.pop()
    
    stonesSorted.push(a - b)
  }
  // console.log(stonesSorted)
  return stonesSorted[0]
};

console.log(lastStoneWeight([2,7,4,1,8,1]))