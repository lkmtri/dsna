function minNumberOfJumps(array) {
  // Write your code here.
  const prev = {}

  for (let i = 0; i < array.length; i += 1) {
    for (let j = 1; j <= array[i]; j += 1) {
      if (i + j >= array.length) break
      prev[i + j] = (prev[i + j] || []).concat(i)
    }
  }

  const minJumps = [0]
  for (let i = 1; i < array.length; i += 1) {
    minJumps[i] = Math.min(...prev[i].map(idx => minJumps[idx])) + 1
  }

  return minJumps[array.length - 1]
}

// Do not edit the line below.
exports.minNumberOfJumps = minNumberOfJumps
