class Stack {
  storage = []

  push = val => {
    this.storage.push(val)
  }

  pop = () => {
    this.storage.pop()
  }

  size = () => {
    this.storage.length
  }
}

export default Stack
