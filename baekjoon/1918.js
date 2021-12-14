// 후위 표기식2

// const question = `A*(B+C)`;
// const question = `A+B*C`;
const question = `A+B*C-D/E`;
// const question = `(A+B*C)-D`;

const fs = require("fs");
const input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin", "utf8").trim()
    : question;

const inputArr = input.split("");
let stack = [],
  result = [];
inputArr.map((str) => {
  if (str === "(") {
    stack.push(str);
  } else if (str === "*" || str === "/") {
    while (
      !!stack.length &&
      (stack[stack.length - 1] === "*" || stack[stack.length - 1] === "/")
    ) {
      result.push(stack.pop());
    }
    stack.push(str);
  } else if (str === "+" || str === "-") {
    while (!!stack.length && stack[stack.length - 1] !== "(") {
      result.push(stack.pop());
    }
    stack.push(str);
  } else if (str === ")") {
    while (stack[stack.length - 1] !== "(") {
      result.push(stack.pop());
    }
    stack.pop();
  } else {
    result.push(str);
  }
});
while (stack.length > 0) {
  result.push(stack.pop());
}
console.log(result.join(""));
