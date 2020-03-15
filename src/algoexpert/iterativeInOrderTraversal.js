function iterativeInOrderTraversal(tree, callback) {
  // Write your code here.
  let previousNode = null
  let currentNode = tree

  while (currentNode !== null) {
    let nextNode
    if (previousNode === null || previousNode === currentNode.parent) {
      if (currentNode.left === null) {
        callback(currentNode)
        nextNode =
          currentNode.right !== null ? currentNode.right : currentNode.parent
      } else {
        nextNode = currentNode.left
      }
    } else if (previousNode === currentNode.left) {
      callback(currentNode)
      nextNode =
        currentNode.right !== null ? currentNode.right : currentNode.parent
    } else {
      nextNode = currentNode.parent
    }
    previousNode = currentNode
    currentNode = nextNode
  }
}

// Do not edit the line below.
exports.iterativeInOrderTraversal = iterativeInOrderTraversal
