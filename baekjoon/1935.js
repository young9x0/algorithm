// 후위 표기식2
const fs = require("fs");
// const question = `1
// AA+A+
// 1`;
const question = `5
ABC*+DE/-
1
2
3
4
5`;
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : question
).split("\n");
// console.log(3 * 2 + 1 - 4 / 5);
//[A,B,C,*,+,D,E,/,-]
// B * C + A - D / E

let idx = 0,
  nStack = [];
const strArr = input[1].split("");
const numArr = input.slice(2).map((n) => +n);

// console.log("strArr", strArr);
// console.log("numArr", numArr);

strArr.map((str) => {
  let signal = "";
  if (str === "+" || str === "-" || str === "*" || str === "/") {
    signal = str;
  } else {
    nStack.push(numArr[idx] ? numArr[idx++] : numArr[--idx]);
  }

  // console.log(idx, nStack, signal);
  if (signal && nStack.length > 1) {
    let second = nStack.pop(),
      first = nStack.pop();

    if (signal === "+") {
      nStack.push(first + second);
    } else if (signal === "-") {
      nStack.push(first - second);
    } else if (signal === "*") {
      nStack.push(first * second);
    } else {
      nStack.push(first / second);
    }
    signal = "";
  }
});
// console.log("nStack", nStack);

console.log(Math.floor(nStack[0] * 100) / 100);
// console.timeEnd("test");
