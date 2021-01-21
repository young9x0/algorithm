function solution(a, b) {
    var answer = 0;
    let ab = [];
    let sol = [a, b];
    if (a == b) {
        return a;
    } else {
        let c = sol.sort((c, p) => c - p);

        for (let i = 0; i <= c[1]; i++) {
            if (i >= c[0]) {
                ab.push(parseInt(i));

            }

        }
        ab.map((v, i) => {
            return answer += ab[i];

        });
    }

    return answer;
}
console.log(solution(3, 6));

function solution(a, b) {
    a > b && ([a, b] = [b, a]);
    return Array(b - a + 1).fill().map((v, i) => a + i).reduce((a, c) => a + c);
}

console.log(solution(3, 6));
function solution(a, b) {
    return (a + b) * ((a > b ? a - b : b - a) + 1) / 2;
}
console.log(solution(3, 6));