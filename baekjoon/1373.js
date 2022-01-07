//2진수 8진수
// https://hianna.tistory.com/386
// parseInt("10", 2); // 2
// 파라미터 "10"을 2진법으로 읽어서, 10진법으로 변환한 값을 리턴

const question = "11001100"; //314

const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin", "utf8").toString().trim()
    : question
).split("\n");

console.log(parseInt(input[0], 2).toString(8));
