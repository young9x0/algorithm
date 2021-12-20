// 접미사 배열

const question = `baekjoon`;

const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin", "utf8").toString()
    : question
).split("\n");

const result = [];

for (let str in input[0]) {
  result.push(input[0].substring(str));
}

console.log(result.sort().join("\n"));
