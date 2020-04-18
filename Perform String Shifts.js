/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
var stringShift = function(s, shift) {
  const str = s.split('')
  shift.forEach(e => {
    const [direction , amount] = e
    /** Right shift */
    if (direction) {
      for(let i=0; i<amount; i++) str.unshift(str.pop());
    } /* Left shift */ else {
      for(let i=0; i<amount; i++) str.push(str.shift());
    }
    // console.log(str.join(''))
  })

  return str.join('')
};

console.log(stringShift("abc", [[0,1],[1,2]]))
