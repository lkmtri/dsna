// https://leetcode.com/problems/min-stack/
function MinStack() {
  this._stack = []
  this._min = []
}

MinStack.prototype.push = function(x) {
  this._stack.push(x)
  if (x <= this.getMin() || !this._min.length) {
    this._min.push(x)
  }
}

MinStack.prototype.pop = function() {
  const top = this._stack.pop()
  if (this.getMin() === top) {
    this._min.pop()
  }
  return top
}

MinStack.prototype.top = function() {
  return this._stack[this._stack.length - 1]
}

MinStack.prototype.getMin = function() {
  return this._min[this._min.length - 1]
}

export default MinStack
