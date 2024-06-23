//https://school.programmers.co.kr/learn/courses/30/lessons/12905
//가장 큰 정사각형 찾기
//해답: https://velog.io/@proshy/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4JS-%EA%B0%80%EC%9E%A5-%ED%81%B0-%EC%A0%95%EC%82%AC%EA%B0%81%ED%98%95-%EC%B0%BE%EA%B8%B0
function solution(board) {
  let answer = 0
  const row = board.length
  const column = board[0].length

  if (row <= 1 || column <= 1) {
    return 1
  }

  for (let i = 1; i < row; i++) {
    for (let j = 1; j < column; j++) {
      if (board[i][j] > 0) {
        const up = board[i - 1][j]
        const left = board[i][j - 1]
        const cross = board[i - 1][j - 1]
        const minNum = Math.min(up, left, cross)
        board[i][j] = minNum + 1
        answer = Math.max(answer, board[i][j])
      }
    }
  }

  return answer * answer
}

console.log(solution([[0, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [0, 0, 1, 0]]))//9
// console.log(solution([[1, 1, 0, 1], [1, 0, 1, 1], [1, 1, 0, 1], [1, 1, 1, 1]]))//4
// console.log(solution([[0, 0, 1, 1], [1, 1, 1, 1]]))//4
