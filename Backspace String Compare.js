/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
  const Sstack = []
  S.split('').forEach(e => {
    if (e === '#' && Sstack.length) { Sstack.pop() }
    else if (e !== '#') { Sstack.push(e) }
  })
  
  const Tstack = []
  T.split('').forEach(e => {
    if (e === '#' && Tstack.length) { Tstack.pop() }
    else if (e !== '#') { Tstack.push(e) }
  })

  return Sstack.join('') === Tstack.join('')
};

console.log(backspaceCompare("y#fo##f", "y#f#o##f"))