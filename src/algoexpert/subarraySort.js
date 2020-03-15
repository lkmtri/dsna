const getLastIndex = array => {
  let i = 0,
    max = array[0],
    last = null

  while (i < array.length) {
    if (array[i] < max) {
      last = i
    }

    if (max < array[i]) {
      max = array[i]
    }

    i += 1
  }

  return last
}

const getFirstIndex = array => {
  let i = array.length - 1,
    min = array[array.length - 1],
    first = null

  while (i >= 0) {
    if (array[i] > min) {
      first = i
    }

    if (min > array[i]) {
      min = array[i]
    }

    i -= 1
  }

  return first
}

function subarraySort(array) {
  // Write your code here.
  let start = getFirstIndex(array),
    end = getLastIndex(array)
  start = start === null ? -1 : start
  end = end === null ? -1 : end
  return [start, end]
}

// Do not edit the line below.
exports.subarraySort = subarraySort
