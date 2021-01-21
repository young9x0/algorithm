function solution(board, moves) {
    const result = [];
    let count = 0;
    let point = 0;
    moves.map((m, j) => {
        board.map((b, i) => {

            if (b[m - 1] !== 0 && count === j) {
                count++;
                // if (result[result.length - 1] === b[m - 1]) {
                //     result.pop();
                //     point += 2;
                // } else 
                result.push(b[m - 1]);
                b[m - 1] = 0;
                console.log(result)
            }
            console.log(board)
        })
    })
    return point;

}


console.log(solution([[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]], [1, 5, 3, 5, 1, 2, 1, 4]));