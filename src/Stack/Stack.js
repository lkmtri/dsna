function Stack() {
  this._stack = []
}

Stack.prototype.push = function(x) {
  this._stack.push(x)
}

Stack.prototype.pop = function() {
  return this._stack.pop()
}

Stack.prototype.peek = function() {
  return this._stack[this._stack.length - 1]
}

Stack.prototype.size = function() {
  return this._stack.length
}

export default Stack
