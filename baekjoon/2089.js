//-2진수

const question = "-13"; //110111

const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin", "utf8").toString()
    : question
).split("\n");

let difference = 0,
  plus = [1],
  minus = [-2];

let i = 2;
if (input[0] < -1) {
  while (input[0] < minus[minus.length - 1]) {
    i % 2 ? minus.push(-Math.pow(2, i)) : plus.push(Math.pow(2, i));
    i++;
  }
  difference = input[0] - minus[minus.length - 1];
  toBinary(difference, i - 1);
} else {
  while (input[0] < plus[plus.length - 1]) {
    i % 2 ? minus.push(-Math.pow(2, i)) : plus.push(Math.pow(2, i));
    i++;
  }
  difference = plus[plus.length - 1] - input[0];
  toBinary(difference, i - 1);
}

function toBinary(difference, i) {
  console.log(difference, i);
}

console.log(plus, minus);
