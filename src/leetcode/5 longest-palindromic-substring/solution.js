String.prototype.hashCode = function () {
  var hash = 0,
    i,
    chr
  if (this.length === 0) return hash
  for (i = 0; i < this.length; i++) {
    chr = this.charCodeAt(i)
    hash = (hash << 5) - hash + chr
    hash |= 0 // Convert to 32bit integer
  }
  return hash
}

const longestPalindrome = s => {
  const from = []
  const to = []

  for (let i = 1; i <= s.length; i += 1) {
    from[i] = s.substring(0, i).hashCode()
    to[i] = substring(s.length - i, s.length).hashCode()
  }

  for (let i = 0; i < s.length; i += 1) { }
}
