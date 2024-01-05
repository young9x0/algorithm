//https://school.programmers.co.kr/learn/courses/30/lessons/92342
//양궁대회
//해답: https://tobegood.tistory.com/entry/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-javascript-js-%EC%96%91%EA%B6%81%EB%8C%80%ED%9A%8C
function solution(n, info) {
  let maxDiff = 0
  let ryon = Array(11).fill(0)
  const shot = (pScore, rScore, count, idx, board) => {
    console.log('pScore, rScore, count, idx', pScore, rScore, count, idx,
    )
    if (n < count) {
      return
    }

    if (idx > 10) {
      let diff = rScore - pScore
      if (diff > maxDiff) {
        board[10] = n - count
        maxDiff = diff
        ryon = board
      }
      return
    }

    if (n > count) {
      console.log('n > count', n, count)
      let board2 = [...board]
      board2[10 - idx] = info[10 - idx] + 1
      shot(pScore, rScore + idx, count + info[10 - idx] + 1, idx + 1, board2)
    }

    if (info[10 - idx] > 0) {
      console.log('info[10 - idx] > 0', info[10 - idx])
      shot(pScore + idx, rScore, count, idx + 1, board)
    } else {
      shot(pScore, rScore, count, idx + 1, board)
    }
  }

  shot(0, 0, 0, 0, ryon)

  if (maxDiff <= 0) {
    return [-1]
  } else {
    return ryon
  }
}

console.log(solution(5, [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]))
//[0,2,2,0,1,0,0,0,0,0,0]
console.log(solution(1, [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]))
//[-1]
console.log(solution(9, [0, 0, 1, 2, 0, 1, 1, 1, 1, 1, 1]))
//[1,1,2,0,1,2,2,0,0,0,0]
console.log(solution(10, [0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 3]))
//[1,1,1,1,1,1,1,1,0,0,2]
