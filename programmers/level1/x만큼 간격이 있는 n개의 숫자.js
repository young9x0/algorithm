function solution(x, n) {
    return [...Array(n).keys()].map(v => (v + 1) * x);
}
function solution(x, n) {
    return Array(n).fill(x).map((v, i) => (i + 1) * v);
}
function solution(x, n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(x * i);
    }
    return arr;
}
console.log(solution(4, 3));