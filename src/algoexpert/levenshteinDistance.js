function levenshteinDistance(str1, str2) {
  // Write your code here.
  if (str1.length === 0) return str2.length
  else if (str2.length === 0) return str1.length

  if (str1[0] === str2[0]) {
    return levenshteinDistance(str1.slice(1), str2.slice(1))
  }

  return (
    1 +
    Math.min(
      levenshteinDistance(str1.slice(1), str2.slice(1)), // Remove first character
      levenshteinDistance(str1.slice(1), str2), // Remove first character
      levenshteinDistance(str1, str2.slice(1)) // Add a new character
    )
  )
}

// Do not edit the line below.
exports.levenshteinDistance = levenshteinDistance
