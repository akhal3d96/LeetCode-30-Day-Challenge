/**
 * @param {number} n
 * @return {boolean}
 */
function isHappy(n) {
  let sum = n
  let itr = 0
  const MAX_ITR = 10000
  while(sum !== 1 && itr < MAX_ITR) {
    let digits = sum.toString().split('')
    sum = 0
    for (let index = 0; index < digits.length; index++) {
      sum += Math.pow(digits[index], 2)
    }
    itr++
  }

  if (sum === 1) {
    return true
  } else {
    return false
  }
};


console.log(isHappy(2))