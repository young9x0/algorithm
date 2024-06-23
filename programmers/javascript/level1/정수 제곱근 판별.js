function solution(s) {
    let a = Math.sqrt(s);

    return Number.isInteger(a) ? (Math.pow(a + 1, 2)) : -1;

}
function solution(s) {
    let a = Math.sqrt(s);

    return Number.isInteger(a) ? (a + 1) ** 2 : -1;

}
console.log(solution(121));