// 숨바꼭질6
// N(1 ≤ N ≤ 105)과 S(1 ≤ S ≤ 109)
const question = `3 3
1 7 11`; //2
// const question = `3 81
// 33 105 57`; //24
// const question = `1 1
// 1000000000`; //999999999

// console.time('test')
const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin", "utf8").toString()
    : question
).split("\n");

const pos = [];
const [N, S] = input[0].split(" ");
// pos.length = ;
console.log(pos);
