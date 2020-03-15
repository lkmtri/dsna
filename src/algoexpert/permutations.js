const getPermutationsHelper = (array, currentPermutations, permutations) => {
  if (array.length === 0 && currentPermutations) {
    permutations.push(currentPermutations)
  } else {
    for (let i = 0; i < array.length; i += 1) {
      const newArray = array.slice(0, i).concat(array.slice(i + 1))
      const newPermutations = currentPermutations.concat(array[i])
      getPermutationsHelper(newArray, newPermutations, permutations)
    }
  }
}

function getPermutations(array) {
  // Write your code here.
  const result = []
  getPermutationsHelper(array, [], result)
  return result
}

// Do not edit the line below.
exports.getPermutations = getPermutations
