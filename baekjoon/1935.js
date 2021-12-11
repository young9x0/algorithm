// 후위 표기식2

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

const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : question
).split("\n");
// // console.log(3 * 2 + 1 - 4 / 5);
// //[A,B,C,*,+,D,E,/,-]
// // B * C + A - D / E

// let idx = 0,
//   nStack = [];
// const strArr = input[1].split("");
// const numArr = input.slice(2).map((n) => +n);

// // console.log("strArr", strArr);
// // console.log("numArr", numArr);

// strArr.map((str) => {
//   let signal = "";
//   if (str === "+" || str === "-" || str === "*" || str === "/") {
//     signal = str;
//   } else {
//     nStack.push(numArr[idx] ? numArr[idx++] : numArr[--idx]);
//   }

//   // console.log(idx, nStack, signal);
//   if (signal && nStack.length > 1) {
//     let second = nStack.pop(),
//       first = nStack.pop();

//     if (signal === "+") {
//       nStack.push(first + second);
//     } else if (signal === "-") {
//       nStack.push(first - second);
//     } else if (signal === "*") {
//       nStack.push(first * second);
//     } else {
//       nStack.push(first / second);
//     }
//     signal = "";
//   }
// });
// // console.log("nStack", nStack);

// console.log(nStack[0].toFixed(2));

const n = Number(input[0]);
const str = input[1];
const stack = [];
const alpha = [];
alpha.length = n;
const nums = [];
nums.length = n;

for (let i = 0; i < n; i++) {
  nums[i] = Number(input[i + 2]);
}
// console.log(nums); //[ 1, 2, 3, 4, 5 ]
let cnt = 0;
for (let i = 0; i < str.length; i++) {
  if (str[i].charCodeAt() >= 65) {
    const alphaIndex = Number(str[i].charCodeAt() - 65);
    if (!alpha[alphaIndex]) {
      alpha[alphaIndex] = nums[cnt++];
    }
    stack.push(alpha[alphaIndex]);
    continue;
  }
  // console.log(stack);
  // [ 1, 2, 3 ]
  // [ 1, 6 ]
  // [ 7, 4, 5 ]
  // [ 7, 0.8 ]
  const operator = str[i];
  const y = stack.pop();
  const x = stack.pop();
  switch (operator) {
    case "+":
      stack.push(x + y);
      break;
    case "-":
      stack.push(x - y);
      break;
    case "*":
      stack.push(x * y);
      break;
    case "/":
      stack.push(x / y);
      break;
  }
}
console.log(stack.pop().toFixed(2));
