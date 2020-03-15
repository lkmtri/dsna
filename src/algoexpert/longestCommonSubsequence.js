const buildSequence = (length, str) => {
  let i = length.length - 1,
    j = length[0].length - 1

  const sequence = []

  while (i > 0 && j > 0) {
    if (length[i][j] === length[i - 1][j]) {
      i--
    } else if (length[i][j] === length[i][j - 1]) {
      j--
    } else {
      sequence.unshift(str[i - 1])
      i--
      j--
    }
  }

  return sequence
}

function longestCommonSubsequence(str1, str2) {
  // Write your code here.
  const length = []

  for (let i = 0; i <= str1.length; i += 1) {
    length[i] = new Array(str2.length + 1).fill(0)
  }

  for (let i = 1; i <= str1.length; i += 1) {
    for (let j = 1; j <= str2.length; j += 1) {
      if (str1[i - 1] === str2[j - 1]) {
        length[i][j] = 1 + length[i - 1][j - 1]
      } else {
        length[i][j] = Math.max(length[i - 1][j], length[i][j - 1])
      }
    }
  }

  return buildSequence(length, str1)
}

// Do not edit the line below.
exports.longestCommonSubsequence = longestCommonSubsequence
