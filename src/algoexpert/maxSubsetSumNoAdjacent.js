function maxSubsetSumNoAdjacent(array) {
  // Write your code here.
  if (array.length === 0) return 0
  if (array.length === 1) return array[0]
  if (array.length === 2) return Math.max(array[0], array[1])

  const sum = [array[0], Math.max(array[0], array[1])]

  for (let i = 2; i < array.length; i += 1) {
    sum[i] = Math.max(sum[i - 2] + array[i], sum[i - 1])
  }

  return sum[array.length - 1]
}

// Do not edit the line below.
exports.maxSubsetSumNoAdjacent = maxSubsetSumNoAdjacent
