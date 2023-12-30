//https://school.programmers.co.kr/learn/courses/30/lessons/160585
//혼자서 하는 틱택토

function solution(board) {
  let answer = 0
  const count = Array(3).fill(0)
  const oTotal = board.reduce((acc, cur) => {
    return acc += [...cur].filter((str) => str === 'O').length
  }, 0)
  const xTotal = board.reduce((acc, cur) => {
    return acc += [...cur].filter((str) => str === 'X').length
  }, 0)

  if (oTotal === 0 && xTotal === 0) {
    return 1
  }

  function checkBingo(col) {
    if (col === 0) {
      if (board[0][1] === 'O' && board[0][2] === 'O') {
        return true
      }
    }

    if (board[1][col] === 'O' && board[2][col] === 'O') {
      return true
    }

    if (board[1][col + 1] === 'O' && board[2][col + 2] === 'O') {
      return true
    }

    return false
  }

  for (let col = 0; col < 3; col++) {
    if (board[0][col] === 'O') {

      const isBingo = checkBingo(col)

      if (isBingo) {
        return (xTotal + 1) === oTotal ? 1 : 0
      }

      if (!isBingo && xTotal === oTotal) {
        count[0] = 1
      }
    }
  }
  return count.some((val) => val === 1) ? 1 : 0
}

// console.log(solution(["O.X", ".O.", "..X"]))//    1
// console.log(solution(["OOO", "...", "XXX"]))//    0
// console.log(solution(["...", ".X.", "..."]))//    0
// console.log(solution(["...", "...", "..."]))//    1
console.log(solution(["O.O", "OX.", "OXX"]))//    1

