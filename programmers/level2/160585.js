//https://school.programmers.co.kr/learn/courses/30/lessons/160585
//혼자서 하는 틱택토

function solution(board) {
  let answer = 0
  const oTotal = board.reduce((acc, cur) => {
    return acc += [...cur].filter((str) => str === 'O').length
  }, 0)
  const xTotal = board.reduce((acc, cur) => {
    return acc += [...cur].filter((str) => str === 'X').length
  }, 0)

  if (oTotal === 0 && xTotal === 0) {
    return 1
  }
  if (oTotal < xTotal) {
    return 0
  }

  function checkBingo(col, player) {
    if (col === 0) {
      for (let row = 0; row < 3; row++) {
        if (board[row][0] === player
            && board[row][1] === player
            && board[row][2] === player) {
          return true
        }
      }
    }

    if (board[0][col] === player
        && board[1][col] === player
        && board[2][col] === player) {
      return true
    }

    if (board[0][col] === player
        && board[1][col + 1] === player
        && board[2][col + 2] === player) {
      return true
    }

    return false
  }

  for (let oCol = 0; oCol < 3; oCol++) {
    const isOBingo = checkBingo(oCol, 'O')

    if (isOBingo) {
      return (xTotal + 1) === oTotal ? 1 : 0
    }

    if (!isOBingo) {
      for (let xCol = 0; xCol < 3; xCol++) {
        const isXBingo = checkBingo(xCol, 'X')
        // console.log('isXBingo', isXBingo)
        if (isXBingo) {
          return xTotal === oTotal ? 1 : 0
        } else {
          return 1
        }
      }
    }
  }

  return 0
}

console.log(solution(["O.X", ".O.", "..X"]))//    1
// console.log(solution(["OOO", "...", "XXX"]))//    0
// console.log(solution(["...", ".X.", "..."]))//    0
// console.log(solution(["...", "...", "..."]))//    1
// console.log(solution(["O.O", "OX.", "OXX"]))//    1
// console.log(solution(["X..", "OX.", "OOX"]))//    0

