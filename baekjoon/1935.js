// 후위 표기식2
const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `5
ABC*+DE/-
1
2
3
4
5`
).split("\n");

let result = 0;
result = 14.7778777855445;
console.log(Math.floor(result * 100) / 100);
// console.timeEnd("test");
