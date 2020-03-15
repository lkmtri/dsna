// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

const branchSumsHelper = (root, sum, array) => {
  if (root.left === null && root.right === null) {
    array.push(sum + root.value)
    return array
  }

  if (root.left !== null) {
    branchSumsHelper(root.left, sum + root.value, array)
  }

  if (root.right !== null) {
    branchSumsHelper(root.right, sum + root.value, array)
  }

  return array
}

function branchSums(root) {
  // Write your code here.
  return branchSumsHelper(root, 0, [])
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree
exports.branchSums = branchSums
