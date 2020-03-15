const powersetHelper = (array, set, len, result) => {
  if (len === 0) {
    result.push(set)
    return
  }

  for (let i = 0; i < array.length; i += 1) {
    const newArray = array.slice(i + 1)
    const newSet = set.concat(array[i])
    powersetHelper(newArray, newSet, len - 1, result)
  }
}

function powerset(array) {
  // Write your code here.
  const result = []

  for (let i = 0; i <= array.length; i += 1) {
    powersetHelper(array, [], i, result)
  }

  return result
}

// Do not edit the line below.
exports.powerset = powerset
