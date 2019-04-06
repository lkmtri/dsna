import Stack from '../../Stack'

function MaxStack() {
  this._stack = new Stack()
  this._max = new Stack()
}

MaxStack.prototype.push = function(x) {
  const max = this._max.size() === 0 ? x : this._max.peek()
  this._max.push(max > x ? max : x)
  this._stack.push(x)
}

MaxStack.prototype.pop = function() {
  this._max.pop()
  return this._stack.pop()
}

MaxStack.prototype.top = function() {
  return this._stack.peek()
}

MaxStack.prototype.peekMax = function() {
  return this._max.peek()
}

MaxStack.prototype.popMax = function() {
  if (this._max.size() === 0) return
  const max = this.peekMax()
  const buffer = new Stack()
  while (this.top() !== max) {
    buffer.push(this.pop())
  }
  this.pop()
  while (buffer.size()) {
    this.push(buffer.pop())
  }
  return max
}

export default MaxStack
