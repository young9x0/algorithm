function solution(n, count = 0) {
    // let a = 0;
    // console.log(a++, ++a);
    return n === 1 ? (count > 500 ? -1 : count) : solution(n % 2 ? n * 3 + 1 : n / 2, ++count);

}
function solution(n) {

    let i = 0;
    while (n > 1) {
        n % 2 === 0 ? n = n / 2 : n = n * 3 + 1;
        i++;
    }
    if (i > 500) i = -1;
    console.log(i);


}
console.log(solution(626331));