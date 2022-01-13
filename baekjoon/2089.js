//-2진수

const question = "-13"; //110111

const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin", "utf8").toString()
    : question
).split("\n");

let list = [],
  N = input[0];
if (N === 0) console.log(N);

while (N !== 0) {
  list.push(Math.abs(N % -2));
  N = Math.ceil(N / -2);
}
console.log(list.reverse().join(""));
