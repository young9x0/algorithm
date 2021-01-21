function solution(n) {
    console.log(Array(Math.floor(n / 2)).fill().map((v, i) => i + 1).reduce((s, c) => n % c ? s : s + c) + n);

}
function solution(n) {
    console.log(Array(n).fill().map((v, i) => i + 1).reduce((s, c) => n % c ? s : s + c));

}
function solution(n, a = 0, b = 0) {
    console.log(n % a);
    return n <= a / 2 ? b : solution(n, a + 1, b += n % a ? 0 : a);
}
function solution(n) {

    let a = 0;
    for (let i = 0; i <= n / 2; i++) {
        if (n % i === 0) a += i;
    }
    console.log(a);

    return a + n;
}
console.log(solution(12));