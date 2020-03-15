// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
class BST {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }

  insert(value) {
    // Write your code here.
    if (this.value <= value) {
      if (this.right) {
        this.right.insert(value)
      } else {
        this.right = new BST(value)
      }
    } else if (this.value > value) {
      if (this.left) {
        this.left.insert(value)
      } else {
        this.left = new BST(value)
      }
    }
    // Do not edit the return statement of this method.
    return this
  }

  contains(value) {
    // Write your code here.
    if (this.value === value) return true
    if (this.left && this.value > value) return this.left.contains(value)
    if (this.right && this.value < value) return this.right.contains(value)
    return false
  }

  findMinNode(root) {
    let node = root
    while (node) {
      if (node.left) {
        node = node.left
      } else {
        return node
      }
    }
  }

  remove(value) {
    // Write your code here.
    if (this.right && this.value < value) {
      this.right = this.right.remove(value)
    } else if (this.left && this.value > value) {
      this.left = this.left.remove(value)
    } else {
      if (!this.left) {
        return this.right
      } else if (!this.right) {
        return this.left
      }

      const temp = this.findMinNode(this.right)

      this.remove(temp.value)

      temp.right = this.right
      temp.left = this.left

      return temp
    }

    // Do not edit the return statement of this method.
    return this
  }
}

// Do not edit the line below.
exports.BST = BST
