function solution(s) {
    return s.reduce((v, i) => (v + i), 0) / s.length;
}
function solution(s) {
    let sum = 0;
    for (let a of s) {
        sum += a;
    }
    return sum / s.length;
}
console.log(solution([5, 5]));