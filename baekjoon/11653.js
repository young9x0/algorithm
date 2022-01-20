//소인수분해

// const question = `72`;
// 2
// 2
// 2
// 3
// 3
// const question = `9991`;
const question = `2`;

const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin", "utf8").trim()
    : question
).split("\n");

let N = Number(input[0]),
  factors = [];
const isPrimeNumber = Array(N + 1).fill(1);
isPrimeNumber[0] = isPrimeNumber[1] = 0;

for (let i = 2; i <= N; i++) {
  let multipleCount = 2;
  while (N >= i * multipleCount) {
    isPrimeNumber[i * multipleCount] = 0;
    multipleCount += 1;
  }
}
// console.log(isPrimeNumber);

for (let i = 2; i <= N; i++) {
  let multipleCount = 1;
  while (!(N % (i * multipleCount))) {
    if (i * multipleCount <= N) {
      isPrimeNumber[i] && factors.push(i);
      multipleCount *= i;
    }
  }
}
console.log(factors.join("\n"));
