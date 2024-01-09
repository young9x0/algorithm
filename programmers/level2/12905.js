//https://school.programmers.co.kr/learn/courses/30/lessons/12905
//가장 큰 정사각형 찾기
function solution(board) {
    let answer = board.length
    const rStore = Array(board.length).fill(null)
    const cStore = Array(board.length).fill(null)

    for (let i = 0; i < board.length; i++) {
        rStore[i] = Array(board.length).fill(0)
        cStore[i] = Array(board.length).fill(0)
    }

    // console.log('rStore', rStore)
    // console.log('cStore', cStore)

    for (let i = 0; i < board.length; i++) {
        let maxRowLen = 0, rIdx = 0

        // console.log('i', i)
        for (let p = 0; p + 1 < board.length; p++) {
            // console.log('------check row',)
            // console.log('p', p)
            if (board[i][p] === 0) {
                maxRowLen = 0
            }
            if (maxRowLen === 0 && board[i][p] === 1) {
                maxRowLen = 1
                rIdx = p
                // console.log('rIdx', rIdx)
            }
            if (board[i][p] === 1 && board[i][p + 1] === 1) {
                maxRowLen += 1
            }
            // console.log('maxRowLen', maxRowLen)
            rStore[i][rIdx] = maxRowLen
            // console.log('rStore', rStore)
        }
    }

    for (let i = 0; i < board.length; i++) {
        // console.log('i', i)
        let maxRowCol = 0, cIdx = 0

        for (let p = 0; p + 1 < board.length; p++) {
            // console.log('-----check col',)
            // console.log('p', p)
            if (board[p][i] === 0) {
                maxRowCol = 0
            }
            if (maxRowCol === 0 && board[p][i] === 1) {
                maxRowCol = 1
                cIdx = p
                // console.log('cIdx', cIdx)
            }
            if (board[p][i] === 1 && board[p + 1][i] === 1) {
                maxRowCol += 1
            }
            // console.log('maxRowCol', maxRowCol)
            cStore[cIdx][i] = Math.max(cStore[cIdx][i], maxRowCol)
            // console.log('cStore', cStore)
        }
    }

    for (let i = 0; i < board.length; i++) {
        for (let p = 0; p + 1 < board.length; p++) {
            if (rStore[i][p] > 0 && rStore[i][p] === cStore[i][p]) {
                answer = Math.min(answer, rStore[i][p])
            }

            // console.log('answer', answer)
        }
    }


    return answer ** 2
}

// console.log(solution([[0, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [0, 0, 1, 0]]))//9
console.log(solution([[0, 0, 1, 1], [1, 1, 1, 1]]))//4
