function largestRange(arr) {
  const numbers = {}
  let bestRange = []
  let longestLength = 0

  for (const num of arr) {
    numbers[num] = true
  }

  for (let i = 0; i < arr.length; i += 1) {
    let left = arr[i] - 1,
      right = arr[i] + 1

    let currentLength = 1

    while (numbers[left]) {
      numbers[left] = false
      left -= 1
      currentLength += 1
    }

    while (numbers[right]) {
      numbers[right] = false
      right += 1
      currentLength += 1
    }

    if (currentLength > longestLength) {
      bestRange = [left + 1, right - 1]
      longestLength = currentLength
    }
  }

  return bestRange
}

// Do not edit the line below.
exports.largestRange = largestRange
