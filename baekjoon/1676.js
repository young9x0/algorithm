//팩토리얼 0의 개수
//수학에서 정수는 양의 정수, 음의 정수 및 0으로 이루어진 수의 체계이다.

// const question = `500`;
// const question = `3`;
//0
const question = `12`;
// 3628800

const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin", "utf8").trim()
    : question
).split("\n");

console.log(
  parseInt(input[0] / 5) + parseInt(input[0] / 25) + parseInt(input[0] / 125)
);
