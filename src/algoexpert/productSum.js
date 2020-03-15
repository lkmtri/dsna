const productSumHelper = (array, depth) => {
  let sum = 0

  for (let s of array) {
    if (Array.isArray(s)) {
      sum = sum + depth * productSumHelper(s, depth + 1)
    } else {
      sum += s
    }
  }

  return sum
}

function productSum(array) {
  // Write your code here.
  return productSumHelper(array, 2)
}

// Do not edit the line below.
exports.productSum = productSum
