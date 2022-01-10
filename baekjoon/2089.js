//-2진수

const question = "-13"; //110111

const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin", "utf8").toString()
    : question
).split("\n");

console.log(input[0]);

if (input[0] < 0) {
  //짝수번째
  // 2^4+2^2- 2^3+2^1
} else {
  //홀수번째
}
