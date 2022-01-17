//진법 변환 2

const question = `60466175 36`;
// const question = `13 11`;
// ZZZZZ

const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin", "utf8").trim()
    : question
).split("\n");

const [N, radix] = input[0].split(" ");
let num = Number(N);

const result = [];

while (num !== 0) {
  if (num % radix > 9) {
    result.push(num % radix ? String.fromCharCode((num % radix) + 55) : 0);
  } else {
    result.push(num % radix);
  }
  num = Math.floor(num / radix);
}

console.log(result.reverse().join(""));
