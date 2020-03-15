function sameBsts(arrayOne, arrayTwo) {
  // Write your code here.
  if (arrayOne.length === 0 && arrayTwo.length === 0) return true

  if (arrayOne[0] !== arrayTwo[0]) return false

  const arrayOneLeft = arrayOne.filter(i => i < arrayOne[0])
  const arrayOneRight = arrayOne.filter(
    (i, idx) => i >= arrayOne[0] && idx !== 0
  )
  const arrayTwoLeft = arrayTwo.filter(i => i < arrayTwo[0])
  const arrayTwoRight = arrayTwo.filter(
    (i, idx) => i >= arrayTwo[0] && idx !== 0
  )

  return (
    sameBsts(arrayOneLeft, arrayTwoLeft) &&
    sameBsts(arrayOneRight, arrayTwoRight)
  )
}

// Do not edit the line below.
exports.sameBsts = sameBsts
