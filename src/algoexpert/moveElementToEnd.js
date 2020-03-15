const swap = (arr, i, j) => {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function moveElementToEnd(array, toMove) {
  // Write your code here.
  let i = 0,
    j = array.length - 1

  while (i < j) {
    while (i < j && array[j] === toMove) j -= 1
    if (array[i] === toMove) swap(array, i, j)
    i += 1
  }

  return array
}

// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd
