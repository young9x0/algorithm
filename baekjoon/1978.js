//소수 찾기

const question = `4
1 3 5 7 11 13 15 19`;
//3

const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin", "utf8").trim()
    : question
).split("\n");

const factors = [];
input[1].split(" ").map((num, idx) => {
  factors[idx] = [];
  for (let i = 1; i < num; i++) {
    num % i === 0 && factors[idx].push(i);
  }
});

console.log(factors.filter((list) => list.length === 1).length);
