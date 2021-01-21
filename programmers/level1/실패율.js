function solution(N, stages) {
    let totalNum = stages.length;
    let arr = [];

    for (let i = 1; i <= N; i++) {
        let stageNum = stages.filter(e => e === i).length;
        let failRatio = 0;
        if (stageNum === 0) {
            failRatio = 0
        } else {
            failRatio = stageNum / totalNum;
        }
        totalNum -= stageNum;
        arr.push({ id: i, ratio: failRatio });

    }
    // console.log(arr);
    // [
    //     { id: 1, ratio: 0.125 },
    //     { id: 2, ratio: 0.42857142857142855 },
    //     { id: 3, ratio: 0.5 },
    //     { id: 4, ratio: 0.5 },
    //     { id: 5, ratio: 0 }
    //   ]
    arr.sort((p, c) => {
        if (p.ratio > c.ratio) {
            return -1;
        } else if (p.ratio < c.ratio) {
            return 1;
        } else {
            if (p.id > c.id) {
                return 1;//
            } else {
                return -1;
            }
        }
    })

    console.log(sortNum2);
}
console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));