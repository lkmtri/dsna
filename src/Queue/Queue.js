class Queue {
  storage = []

  enqueue = val => {
    this.storage.push(val)
  }

  dequeue = val => {
    return this.storage.shift()
  }

  size = () => {
    return this.storage.length
  }
}

export default Queue
