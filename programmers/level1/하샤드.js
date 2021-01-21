// 
function solution(x, i = 0, sum = 0) {

    return String(x).length == i ? x % sum == 0 : solution(x, i + 1, sum + String(x)[i] * 1);
}

function solution(x) {
    let answer = false;
    let n = x.toString().split('').map(v => +v);
    let d = n.reduce((a, c) => a + c);
    if (x % d === 0) answer = true;
    return answer;
}

console.log(solution(18));