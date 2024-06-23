function solution(a, c) {

    let arr = [], i = 0, j = 0, k = 0, b = 0;
    c.forEach((e, h) => {


        i = e[0], j = e[1], k = e[2];

        b = a.slice(i - 1, j).sort((a, b) => a - b)[k - 1];

        arr.push(b);

    });

    return arr;

}
console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]));

function solution(g, h) {

    return h.map(([i, j, k]) => {

        return g.slice(i - 1, j).sort((a, b) => a - b)[k - 1];


    })
}
console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]));
function solution(g, h) {
    let arr = [];
    for (let v of h) {

        arr.push(g.slice(v[0] - 1, v[1]).sort((a, b) => a - b)[v[2] - 1]);

    }
    return arr;
}
console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]));
