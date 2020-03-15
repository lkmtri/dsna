const maxPathSumHelper = (tree, callback) => {
  if (tree === null) {
    callback(0)
    return 0
  }

  const maxLeft = maxPathSumHelper(tree.left, callback)
  const maxRight = maxPathSumHelper(tree.right, callback)

  const maxAtRoot = Math.max(
    tree.value + Math.max(maxLeft, maxRight, 0),
    tree.value + maxLeft + maxRight
  )

  callback(maxAtRoot)

  return tree.value + Math.max(maxLeft, maxRight, 0)
}

function maxPathSum(tree) {
  // Write your code here.
  let max = -Infinity
  const callback = sum => {
    if (sum > max) {
      max = sum
    }
  }
  maxPathSumHelper(tree, callback)
  return max
}

// Do not edit the line below.
exports.maxPathSum = maxPathSum
