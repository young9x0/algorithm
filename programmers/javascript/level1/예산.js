//sol 1
function solution(d, budget) {
    while (d.sort((p, c) => p - c).reduce((a, c) => (a + c), 0) > budget) d.pop();
    return d.length;
}
//sol2
function solution(d, budget) {
    let count = 0;
    let sum = 0;
    d.sort((p, c) => p - c);
    for (let i = 0; i < d.length; i++) {
        count++;
        sum += d[i];
        console.log(count, sum);
        if (sum > budget) {
            count--;
            break;
        }
    }
    return count;
}
//sol3
function solution(d, budget) {
    let count = 0;
    let sum = 0;
    d.sort((p, c) => p - c);
    for (let i = 0; i < d.length; i++) {
        sum += d[i];
        count = d.length;
        console.log(sum, i);
        if (sum > budget) {
            count = i;
            break;
        }
    }
    return count;
}
console.log(solution([1, 3, 2, 5, 4], 9));

