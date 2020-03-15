const getAllNeighbours = (board, r, c) =>
  [[r - 1, c], [r + 1, c], [r, c - 1], [r, c + 1]].filter(([_r, _c]) => {
    return !(_r < 0 || _c < 0 || _r >= board.length || _c >= board[0].length)
  })

const isAtBorder = (board, r, c) => getAllNeighbours(board, r, c).length < 4

const makeVisitedState = () => {
  const visited = {}

  const markVisited = (x, y) => {
    visited[x] = visited[x] || {}
    visited[x][y] = true
  }

  const isVisited = (x, y) => (visited[x] || {})[y]

  return {
    markVisited,
    isVisited
  }
}

const dfs = (board, r, c) => {
  const arr = [[r, c]]
  const visitedState = makeVisitedState()

  while (arr.length) {
    const [curR, curC] = arr.shift()

    visitedState.markVisited(curR, curC)

    if (isAtBorder(board, curR, curC)) {
      return false
    } else {
      const neighbours = getAllNeighbours(board, curR, curC).filter(
        ([_r, _c]) => !visitedState.isVisited(_r, _c) && board[_r][_c] === 'O'
      )

      arr.unshift(...neighbours)
    }
  }

  return true
}

const bfs = (board, r, c) => {
  const arr = [[r, c]]

  while (arr.length) {
    const [curR, curC] = arr.shift()
    board[curR][curC] = 'X'

    const neighbours = getAllNeighbours(board, curR, curC).filter(
      ([_r, _c]) => board[_r][_c] === 'O'
    )

    arr.push(...neighbours)
  }
}

const solve = board => {
  for (let r = 0; r < board.length; r += 1) {
    for (let c = 0; c < board[r].length; c += 1) {
      if (board[r][c] === 'O') {
        dfs(board, r, c) && bfs(board, r, c)
      }
    }
  }

  return board
}
