//67. 사탕게임
// 정답 해설: https://tang25.tistory.com/entry/%EC%9E%90%EB%B0%94%EB%B0%B1%EC%A4%80-3085%EB%B2%88-%EC%82%AC%ED%83%95%EA%B2%8C%EC%9E%84%EB%B8%8C%EB%A3%A8%ED%8A%B8%ED%8F%AC%EC%8A%A4%EC%97%84%ED%83%B1
// 시간 복잡도는 O(N^2)이고 N <=50이므로 전체 경우의 수가 몇개 안되니깐 브루트 포스를 이용해 풀 수 있다.
// 오른쪽, 아래쪽 방향으로만 바꾸면 된다. 위쪽, 왼쪽 방향으로 바꾸는 것과 오른쪽, 아래쪽 방향으로 바꾸는 결과는 동일하기 때문이다.


const question = `3
CCP
CCP
PPC`;
// 3

// const question = `4
// PPPP
// CYZY
// CCPY
// PPCC`
//4

// const question = `5
// YCPZY
// CYZZP
// CCPPP
// YCYZC
// CPPZZ`;
// 4


const fs = require('fs');
const [size, ...boardString] = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin', 'utf8').toString() : question).trim().split('\n');

const N = Number(size);
const board = boardString.map((row) => row.split(""))
let max = 1

const swap = (x1, y1, x2, y2) => {
    const temp = board[x1, y1]
    board[x1, y1] = board[x2, y2]
    board[x2, y2] = temp
}

const countMax = () => {
    // 행을 기준으로 긴 수열 탐색
    for (let rowIdx = 0; rowIdx < N; rowIdx++) {
        let currentCount = 1
        for (let colIdx = 0; colIdx < N - 1; colIdx++) {
            if (board[rowIdx, colIdx] === board[rowIdx, colIdx + 1]) {
                currentCount++
                max = Math.max(currentCount, max)
            } else {
                currentCount = 1
            }
        }
    }

    //열을 기준으로 긴 수열 탐색
    for (let colIdx = 0; colIdx < N; colIdx++) {
        let currentCount = 1
        for (let rowIdx = 0; rowIdx < N - 1; rowIdx++) {
            if (board[rowIdx, colIdx] === board[rowIdx + 1, colIdx]) {
                currentCount++
                max = Math.max(currentCount, max)
            } else {
                currentCount = 1
            }
        }
    }
}

//행을 기준으로 오른쪽 요소와 swap
for (let rowIdx = 0; rowIdx < N; rowIdx++) {
    for (let colIdx = 0; colIdx < N - 1; colIdx++) {
        swap(rowIdx, colIdx, rowIdx, colIdx + 1)
        countMax()
        swap(rowIdx, colIdx + 1, rowIdx, colIdx)
    }
}

//열을 기준으로 아래쪽 요소와 swap
for (let colIdx = 0; colIdx < N; colIdx++) {
    for (let rowIdx = 0; rowIdx < N - 1; rowIdx++) {
        swap(rowIdx, colIdx, rowIdx + 1, colIdx)
        countMax()
        swap(rowIdx + 1, colIdx, rowIdx, colIdx)
    }
}


console.log(max)
