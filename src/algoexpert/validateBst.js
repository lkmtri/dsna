// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

const validateBstHelper = (tree, lower, upper) => {
  if (tree === null) return true

  if (tree.value < lower || tree.value >= upper) {
    return false
  }

  if (tree.left && tree.left.value >= tree.value) {
    return false
  } else if (tree.right && tree.right.value < tree.value) {
    return false
  }

  return (
    validateBstHelper(tree.left, lower, tree.value) &&
    validateBstHelper(tree.right, tree.value, upper)
  )
}

function validateBst(tree) {
  // Write your code here.
  return validateBstHelper(tree, -Infinity, Infinity)
}

// Do not edit the line below.
exports.BST = BST
exports.validateBst = validateBst
