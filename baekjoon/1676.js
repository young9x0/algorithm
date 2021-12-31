//팩토리얼 0의 개수

// const question = `500`;
// const question = `3`;
//0
const question = `100`;
// 3628800

const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin", "utf8").trim()
    : question
).split("\n");

// console.time("test");
let result = 1,
  count = 0;
for (let i = 1; i <= Number(input[0]); i++) {
  if (!(i % 10) || !(i % 5) || !(i % 2)) {
    result *= i;
  }
  if (!(result % 10)) {
    result = divide(result);
  }
  // console.log(i, result, count);
}

function divide(result) {
  // console.log("result", result);
  // console.log("count", count);
  if (result > 0) {
    if (!(result % 10)) {
      count++;
      return divide(result / 10);
    } else {
      return result;
    }
  }
}

// console.log(result);
console.log(count);
