import Stack from '../../Stack'

const simplifyPath = path => {
  const arr = path.split('/')
  const s = new Stack()

  arr.forEach(p => {
    if (p === '.' || p === '') return
    if (p === '..') {
      s.pop()
      return
    }
    s.push(p)
  })

  let res = ''

  while (s.size()) {
    res = `/${s.pop()}`.concat(res)
  }

  return res || '/'
}
