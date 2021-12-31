//팩토리얼 0의 개수

// const question = `500`;
// const question = `3`;
const question = `0`;
//0
// const question = `10`;
// 3628800

const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin", "utf8").trim()
    : question
).split("\n");

let count = 0;
function divide(result) {
  // console.log("result", result);
  // console.log("count", count);
  if (result > 0) {
    if (!(result % 10)) {
      count++;
      return divide(result / 10);
    } else if (!(result % 5)) {
      count++;
      return divide(result / 5 / 2);
    }
  }
  return count;
}
// console.time("test");
function factorial(N) {
  // console.log("N", N);
  if (N - 2 > 0) {
    factorial(N - 1);
    return divide(N);
  } else {
    return 0;
  }
}

console.log(factorial(Number(input[0])));

// console.timeEnd("test");
