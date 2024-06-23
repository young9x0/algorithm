//https://school.programmers.co.kr/learn/courses/30/lessons/160585
//혼자서 하는 틱택토
//해법:https://velog.io/@sean2337/Programmers-%ED%98%BC%EC%9E%90%EC%84%9C-%ED%95%98%EB%8A%94-%ED%8B%B1%ED%83%9D%ED%86%A0-JavaScript

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

  function checkBingo(player) {
    //가로 확인
    for (let row = 0; row < 3; row++) {
      if (board[row][0] === player
          && board[row][1] === player
          && board[row][2] === player) {
        return true
      }
    }

    //세로 확인
    for (let col = 0; col < 3; col++) {
      if (board[0][col] === player
          && board[1][col] === player
          && board[2][col] === player) {
        return true
      }
    }

    //대각선 확인
    for (let row = 0; row < 3; row++) {
      if (board[0][0] === player
          && board[1][1] === player
          && board[2][2] === player) {
        return true
      }
      if (board[0][2] === player
          && board[1][1] === player
          && board[2][0] === player) {
        return true
      }
    }

    return false
  }

  if (oTotal === xTotal) {
    const isOBingo = checkBingo("O")
    return isOBingo ? 0 : 1
  }

  if (oTotal === (xTotal + 1)) {
    const isXBingo = checkBingo("X")
    return isXBingo ? 0 : 1
  }

  return 0
}

console.log(solution(["O.X", ".O.", "..X"]))//    1
// console.log(solution(["OOO", "...", "XXX"]))//    0
// console.log(solution(["...", ".X.", "..."]))//    0
// console.log(solution(["...", "...", "..."]))//    1
// console.log(solution(["O.O", "OX.", "OXX"]))//    1
// console.log(solution(["X..", "OX.", "OOX"]))//    0

