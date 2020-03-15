const findClosestValueInBstHelper = (tree, target, closest) => {
  if (tree === null) return closest
  if (Math.abs(target - closest) > Math.abs(tree.value - target)) {
    closest = tree.value
  }

  if (target > tree.value) {
    return findClosestValueInBstHelper(tree.right, target, closest)
  } else if (target < tree.value) {
    return findClosestValueInBstHelper(tree.left, target, closest)
  } else {
    return closest
  }
}

function findClosestValueInBst(tree, target) {
  // Write your code here.
  return findClosestValueInBstHelper(tree, target, Infinity)
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst
