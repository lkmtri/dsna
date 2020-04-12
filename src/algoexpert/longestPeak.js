function longestPeak(array) {
  // Write your code here.

  const inc = [1]
  const dec = new Array(array.length).fill(1)

  for (let i = 1; i < array.length; i += 1) {
    if (array[i] > array[i - 1]) {
      inc[i] = inc[i - 1] + 1
    } else {
      inc[i] = 1
    }
  }

  for (let i = array.length - 2; i >= 0; i -= 1) {
    if (array[i] > array[i + 1]) {
      dec[i] = dec[i + 1] + 1
    } else {
      dec[i] = 1
    }
  }

  let longest = 0

  for (let i = 0; i < array.length - 1; i += 1) {
    if (array[i] > array[i - 1] && array[i] > array[i + 1]) {
      if (inc[i] + dec[i] - 1 > longest) {
        longest = inc[i] + dec[i] - 1
      }
    }
  }

  return longest
}

// Do not edit the line below.
exports.longestPeak = longestPeak
