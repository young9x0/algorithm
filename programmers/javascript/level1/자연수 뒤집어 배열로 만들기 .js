function solution(n) {
    var arr = [];
    do {
        console.log(n % 10);
        arr.push(n % 10);
        n = Math.floor(n / 10);
    }
    while (n > 0);
    return n.toString().split('').reverse().map(v => parseInt(v));

}
function solution(n) {
    console.log(n.toString().split(''));
    return n.toString().split('').reverse().map(v => +v);
}
function solution(n) {
    let arr = [];
    n.toString().split('').map((v, i) => arr.push(parseInt(v))).reverse();
    console.log(arr);
}
console.log(solution(19875));