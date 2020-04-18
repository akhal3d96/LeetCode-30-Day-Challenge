/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {  
  const stack = []
  const astStack = []
  const str = s.split('')

  for(let i=0; i<str.length; i++) {
    if(str[i] === '(') { stack.push(i) }
    
    else if (str[i] === ')') {
      if(stack.length) { stack.pop() }
      else if(astStack.length) { astStack.pop() }
      else { return false }
    }

    else if(str[i] === '*') { astStack.push(i) }
  }

  if(!stack.length) return true
  else if(astStack.length) {
    // console.log(stack, astStack)
    for (let i = 0; i < stack.length; i++) {
    if (stack[stack.length - 1 - i] < astStack[astStack.length - 1 - i]) { stack.pop(); astStack.pop(); i--; /*console.log(stack, astStack)*/ }
      else { return false }
    }
  }
  if(!stack.length) return true

  return false
};

console.log(checkValidString("(())((())()()(*)(*()(())())())()()((()())((()))(*"))