/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  const min = x < this.getMin() ? x : this.getMin()
  this.stack.push({
    value: x,
    min: min
  })
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length-1].value
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  if(this.stack.length) return this.stack[this.stack.length-1].min
  return Infinity
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin())   //--> Returns -3.
minStack.pop();
console.log(minStack.top())     //--> Returns 0.
console.log(minStack.getMin())   //--> Returns -2.