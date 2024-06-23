function solution(n) {

    return (n + "").split("").reduce((acc, c) => acc + parseInt(c), 0);

}
function solution(n) {
    let a = 0;
    n.toString().split('').map(v => a += parseInt(v));
    console.log(a);

}
console.log(solution(987));