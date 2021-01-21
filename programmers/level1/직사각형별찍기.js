function solution(c, r) {
    return Array(r).fill().map(v => '*'.repeat(c)).join('\n');
}
function solution(c, r) {
    // console.log(Array.from(Array(c), () => "*"));
    return Array(r).fill([]).map((_) => Array.from(Array(c), () => "*").join("")).join("\n");
}

process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    console.log(a, b);
    const row = '*'.repeat(a)
    for (let i = 0; i < b; i++) {
        console.log(row)
    }

});
