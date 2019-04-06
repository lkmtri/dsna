import Stack from '../../Stack'

const find132pattern = nums => {
  if (nums.length < 3) return false

  const s = new Stack()

  const minBeforeCur = [Infinity]

  for (let i = 1; i < nums.length; i += 1) {
    minBeforeCur.push(Math.min(minBeforeCur[i - 1], nums[i - 1]))
  }

  for (let i = 0; i < nums.length; i += 1) {
    const val = nums[i]
    let top = s.peek()

    while (top && top.val <= val) {
      s.pop()
      top = s.peek()
    }

    if (top && top.val > val && top.min < val) {
      return true
    }

    s.push({ val, min: minBeforeCur[i] })
  }

  return false
}

export default find132pattern
