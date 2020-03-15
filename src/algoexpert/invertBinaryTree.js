function invertBinaryTree(tree) {
  // Write your code here.
  if (!tree) return tree

  const temp = tree.left
  tree.left = tree.right
  tree.right = temp

  invertBinaryTree(tree.left)
  invertBinaryTree(tree.right)

  return tree
}

// Do not edit the line below.
exports.invertBinaryTree = invertBinaryTree
