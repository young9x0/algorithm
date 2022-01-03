//팩토리얼

const question = `0`;
// 3628800

const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin", "utf8").trim()
    : question
).split("\n");

function factorial(N) {
  // console.log("N", N);

  if (N - 2 > 0) {
    return N * factorial(N - 1);
  } else if (N === 0) {
    return 1;
  } else {
    return N;
  }
}

console.log(factorial(Number(input[0])));
