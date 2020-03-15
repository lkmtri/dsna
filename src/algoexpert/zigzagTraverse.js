function zigzagTraverse(array) {
  // Write your code here.
  const size = array.length
  const res = []

  let isDown = true
  for (let i = 0; i <= 2 * size - 2; i += 1) {
    const sum = i
    const start = sum - Math.min(size - 1, sum)
    const end = sum - start

    for (let j = start; j <= end; j += 1) {
      if (isDown) {
        res.push(array[j][sum - j])
      } else {
        res.push(array[sum - j][j])
      }
    }

    isDown = !isDown
  }

  return res
}

// Do not edit the line below.
exports.zigzagTraverse = zigzagTraverse
