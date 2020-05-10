/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
  count = 0
  while(m!=n) {
    m = m>>1
    n = n>>1
    count++
  }
  return m<<count
};

console.log(rangeBitwiseAnd(16,19))