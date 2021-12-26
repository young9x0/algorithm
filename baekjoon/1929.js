//소수 구하기

const question = `3 100`;
// 3
// 5
// 7
// 11
// 13

const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin", "utf8").trim()
    : question
).split("\n");

const [startNum, lastNum] = input[0].split(" ").map(Number);
let isPrimeNumber = Array(lastNum + 1).fill(true);
isPrimeNumber[0] = isPrimeNumber[1] = false;
const results = [];

for (let i = 2; i <= Math.ceil(Math.sqrt(lastNum)); i++) {
  let mutipleIdx = 2;
  while (i * mutipleIdx <= lastNum) {
    isPrimeNumber[i * mutipleIdx] = false;
    mutipleIdx++;
  }
}

isPrimeNumber.filter(
  (list, idx) => idx > startNum - 1 && list && results.push(idx)
);

console.log(results.join("\n"));
