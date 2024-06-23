function solution(s) {
    if (s.length === 1) return [-1];
    let arr = [];
    s.forEach((v, i) => {
        if (v < s[i - 1]) {
            arr.push(v);
        }
    });
    let a = arr.sort((p, c) => p - c).splice(0, 1)[0];
    return s.filter((v) => v !== a);

};

function solution(arr) {
    // const minValue = Math.min.apply(null, arr);
    // console.log(minValue);
    const min = Math.min(...arr);
    const r = arr.filter(v => v !== min);
    return r.length ? r : [-1];

}

console.log(solution([1]));