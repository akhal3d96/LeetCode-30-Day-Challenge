const PEAK = Symbol('peak')
const VALLEY = Symbol('valley')

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

  prices = prices.filter((item, pos, arr) => pos === 0 || item !== arr[pos-1]);

  // find peaks and valleys
  const peakAndValleys = prices.map((currentVal, index) => {
    if( (index === prices.length - 1) && prices[index]-prices[index-1] > 0) { return PEAK}
    else if(currentVal - prices[index+1] > 0 ) { return PEAK } 
    else { return VALLEY }
  })
  let maxProfit = 0
  for (let p2 = p1 = 0; p1 < prices.length;p1++,p2++) {
    if(peakAndValleys[p1] === VALLEY) {
      while(p2 < prices.length) {
        if (peakAndValleys[p2] === PEAK) {
          // console.log(p1, p2)
          maxProfit = maxProfit + prices[p2] - prices[p1]
          p1 = p2 = Math.max(p1, p2)
          break
        }
        p2++
      }
    }
  }

  const delta = prices[prices.length-1] - prices[0]
  return Math.max(maxProfit, delta)
}

console.log(maxProfit([7,1,5,3,6,4]))