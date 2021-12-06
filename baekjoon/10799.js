// 쇠막대기
// const input = require("fs")
//   .readFileSync("/dev/stdin", "utf8")
//   .trim()
//   .split("\n");

// const input = ["()(((()())(())()))(())"]; // 17
const input = ["(((()(()()))(())()))(()())"]; // 24

let stack = [],
  result = 0,
  splitBrace = [];

splitBrace = input[0].split("");

splitBrace.map((brace, idx) => {
  if (brace === "(") {
    stack.push(brace);
  } else if (brace === ")") {
    stack.pop();
    if (stack.length > 0) {
      result += 1 * stack.length;
    }
  }
  console.log(idx, stack, result);
});
console.log(result);
