/**
 * @param {string} expression
 * @return {string}
 */
const parseTernary = expression => {
  const map = {}
  const stack = []

  for (let i = 0; i < expression.length; i += 1) {
    if (expression[i] === '?') {
      stack.unshift(i)
    } else if (expression[i] === ':') {
      map[stack.shift()] = i
    }
  }

  let s = 0,
    e = expression.length - 1

  while (s < e) {
    const questionMarkIndex = s + 1
    const colonIndex = map[questionMarkIndex]

    if (expression[s] === 'T') {
      s = questionMarkIndex + 1
      e = colonIndex - 1
    } else if (expression[s] === 'F') {
      s = colonIndex + 1
    }
  }

  return expression[s]
}
