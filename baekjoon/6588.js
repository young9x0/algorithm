//골드바흐의 추측

const question = `8
20
42
0`;
// 8 = 3 + 5
// 20 = 3 + 17
// 42 = 5 + 37
//b-a
//Goldbach's conjecture is wrong.

const fs = require("fs");

const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin", "utf8").trim()
    : question
).split("\n");

const inputNums = input.map((list) => Number(list));

const primeNumber = [],
  biggestInt = Math.max(...inputNums);
let result = "",
  isWrong = true;

for (let i = 0; i <= biggestInt; i++) {
  primeNumber[i] = i;
}
for (let i = 2; i <= biggestInt; i++) {
  if (primeNumber[i] === 0) continue;
  for (let j = i + i; j <= biggestInt; j += i) primeNumber[j] = 0;
}

// console.log(" primeNumber", primeNumber);
for (let i = 0; i < input.length; i++) {
  for (let j = 3; j <= input[i]; j++) {
    if (primeNumber[j] && primeNumber[input[i] - j]) {
      isWrong = false;
      result += `${input[i]} = ${j} + ${input[i] - j}\n`;
      break;
    }
  }
  if (isWrong) result += `Goldbach's conjecture is wrong.\n`;
}

console.log(result);
