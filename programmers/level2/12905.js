//https://school.programmers.co.kr/learn/courses/30/lessons/12905
//가장 큰 정사각형 찾기
function solution(board) {
  let maxLen = 0
  for (let row = 0; row < board.length; row++) {
    let maxRowLen = 0, curRowLen = 0, sIdx = 0, maxSIdx = 0

    // console.log('1 ---row', row)
    for (let col = 0; col < board[0].length; col++) {
      // console.log('--col', col)
      if (board[row][col] === 0) {
        curRowLen = 0
      }
      if (curRowLen === 0 && board[row][col] === 1) {
        curRowLen = 1
        sIdx = col
        // console.log('curRowLen start')
      }
      if (board[row][col] === 1 && board[row][col + 1] === 1) {
        curRowLen += 1
      }
      // console.log('curRowLen', curRowLen)

      if (maxRowLen < curRowLen) {
        maxRowLen = curRowLen
        maxSIdx = sIdx
      }
    }

// 한 row 검사가 끝났을 때
//     console.log('----maxRowLen', maxRowLen)
    if (maxRowLen === 0) {
      continue
    }

    let maxColLen = 1
    for (let row2 = row + 1; row2 < board.length; row2++) {
      for (let col = maxSIdx; col < maxSIdx + maxRowLen; col++) {
        // console.log('maxSIdx', maxSIdx)
        // console.log('row2', row2)
        // console.log('col', col)
        // console.log('board[row2][col]', board[row2][col])
        if (board[row2][col] === 0) {
          row2 = maxRowLen
          break
        }

        if (col === maxSIdx + maxRowLen - 1) {

          maxColLen += 1
          // console.log('----break')
          break
        }

      }
    }
    // console.log('maxColLen', maxColLen)
    const temp = Math.min(maxRowLen, maxColLen)
    // console.log('temp', temp)
    maxLen = Math.max(maxLen, temp)
    // console.log('maxLen', maxLen)
  }

  return maxLen ** 2
}

console.log(solution([[0, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [0, 0, 1, 0]]))//9
// console.log(solution([[1, 1, 0, 1], [1, 0, 1, 1], [1, 1, 0, 1], [1, 1, 1, 1]]))//4
// console.log(solution([[0, 0, 1, 1], [1, 1, 1, 1]]))//4
