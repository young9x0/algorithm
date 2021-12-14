// 후위 표기식2

const question = `A*(B+C)`;
// const question = `A+B*C`;
// const question = `A+B*C-D/E`;
// const question = `(A+B*C)-D`;

const fs = require("fs");
const input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin", "utf8").trim()
    : question;

const inputArr = input.split("");
const operator = [],
  postFix = [],
  alphabet = [];
let result = "",
  rFlag = false;

inputArr.map((str) => {
  if (str.charCodeAt() >= 65) {
    alphabet.push(str);
  }

  if (str.charCodeAt() < 65) {
    operator.push(str);
  }

  if (operator[operator.length - 1] === ")") {
    operator.pop();
    rFlag = false;
  } else if (operator[operator.length - 1] === "(") {
    operator.pop();
    rFlag = true;
  }

  if (operator.length + 1 === alphabet.length && !rFlag) {
    if (
      operator[operator.length - 1] === "*" ||
      operator[operator.length - 1] === "/"
    ) {
      while (alphabet.length > 0) {
        result += alphabet.shift();
      }
      while (0 < operator.length) {
        if (!rFlag) {
          result += operator.pop();
        } else {
          postFix.push(operator.pop());
        }

        while (!rFlag && postFix.length > 0) {
          result += postFix.pop();
        }
      }
    }
  }
});
while (alphabet.length > 0) {
  result += alphabet.shift();
}
while (0 < operator.length) {
  result += operator.pop();
}
console.log(result);
