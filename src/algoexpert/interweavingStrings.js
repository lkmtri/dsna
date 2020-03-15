function interweavingStrings(one, two, three) {
  // Write your code here.
  if (!one.length) {
    return two === three
  } else if (!two.length) {
    return one === three
  }

  if (one[0] === three[0] && two[0] === three[0]) {
    return (
      interweavingStrings(one.slice(1), two, three.slice(1)) ||
      interweavingStrings(one, two.slice(1), three.slice(1))
    )
  } else if (one[0] === three[0]) {
    return interweavingStrings(one.slice(1), two, three.slice(1))
  } else if (two[0] === three[0]) {
    return interweavingStrings(one, two.slice(1), three.slice(1))
  }

  return false
}

// Do not edit the line below.
exports.interweavingStrings = interweavingStrings
