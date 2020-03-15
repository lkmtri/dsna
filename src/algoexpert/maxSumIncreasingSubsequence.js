function maxSumIncreasingSubsequence(array) {
  // Write your code here.
  if (array.length === 0) return []

  const maxSum = []

  for (let i = 0; i < array.length; i += 1) {
    maxSum[i] = [array[i], [array[i]]]
  }

  let res = maxSum[0]

  for (let i = 1; i < array.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (array[j] < array[i] && maxSum[i][0] < maxSum[j][0] + array[i]) {
        maxSum[i] = [maxSum[j][0] + array[i], [...maxSum[j][1], array[i]]]
      }
    }

    if (maxSum[i][0] > res[0]) {
      res = maxSum[i]
    }
  }

  return res
}

// Do not edit the line below.
exports.maxSumIncreasingSubsequence = maxSumIncreasingSubsequence
