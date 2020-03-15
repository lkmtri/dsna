/**
 * @param {string} input
 * @return {number}
 */
class Node {
  constructor(name) {
    this.name = name
    this.children = []
  }
}

var lengthLongestPath = function(input) {
  const root = new Node('__root__')
  let s = input
  let i = s.indexOf('\\')

  while (i !== -1) {}
}
