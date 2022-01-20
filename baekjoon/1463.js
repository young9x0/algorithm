//1로 만들기

// const question = `2`;//1
const question = `10`; //3

const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin", "utf8").toString().trim()
    : question
).split("\n");

const N = Number(input[0]);
let count = 0,
  maxThree = 0;

if (N < 3) {
  N > 1 ? (count = 1) : (count = 0);
} else {
  let multiple = 1;
  while (N >= multiple * 3) {
    multiple += 1;
  }
}
console.log(count);
