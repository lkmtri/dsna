function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
  arrayOne.sort((a, b) => a - b)
  arrayTwo.sort((a, b) => a - b)

  let answer = []
  let min = Infinity
  let firstIndex = 0,
    secondIndex = 0

  while (firstIndex < arrayOne.length && secondIndex < arrayTwo.length) {
    if (arrayOne[firstIndex] >= arrayTwo[secondIndex]) {
      const diff = arrayOne[firstIndex] - arrayTwo[secondIndex]
      if (min > diff) {
        answer = [arrayOne[firstIndex], arrayTwo[secondIndex]]

        min = diff
      }
      secondIndex += 1
    } else {
      firstIndex += 1
    }
  }

  firstIndex = 0
  secondIndex = 0

  while (firstIndex < arrayOne.length && secondIndex < arrayTwo.length) {
    if (arrayOne[firstIndex] <= arrayTwo[secondIndex]) {
      const diff = arrayTwo[secondIndex] - arrayOne[firstIndex]
      if (min > diff) {
        answer = [arrayOne[firstIndex], arrayTwo[secondIndex]]

        min = diff
      }
      firstIndex += 1
    } else {
      secondIndex += 1
    }
  }

  return answer
}

// Do not edit the line below.
module.exports.smallestDifference = smallestDifference
