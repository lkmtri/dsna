function Queue() {
  this._queue = []
}

Queue.prototype.enqueue = function(x) {
  this._queue.push(x)
}

Queue.prototype.dequeue = function() {
  return this._queue.shift()
}

Queue.prototype.peek = function() {
  return this._queue[0]
}

Queue.prototype.size = function() {
  return this._queue.length
}

export default Queue
