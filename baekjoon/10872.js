//팩토리얼

const question = `10`;
// 3628800

const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin", "utf8").trim()
    : question
).split("\n");
let result = 0;
function factorial(N) {
  console.log("N", N);

  if (N - 2 > 0) {
    return N * factorial(N - 1);
  }
}
result = factorial(Number(input[0]));
console.log(result);
