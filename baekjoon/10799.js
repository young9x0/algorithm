// 쇠막대기
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

// const input = ["()(((()())(())()))(())"]; // 17
// const input = ["(((()(()()))(())()))(()())"]; // 24
// console.time("test");
let stack = [],
  result = 0,
  splitBrace = [],
  before = "";

splitBrace = input[0].split("");

splitBrace.map((brace, idx) => {
  if (idx > 0) {
    before = splitBrace[idx - 1];
  }
  if (brace === "(") {
    stack.push(brace);
  } else if (brace === ")") {
    stack.pop();
    if (before === "(") {
      result += 1 * stack.length;
    } else {
      result += 1;
    }
  }
  // console.log(idx, stack, before, result);
});
console.log(result);
// console.timeEnd("test");
