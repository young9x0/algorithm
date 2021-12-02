// // 요세푸스 문제
// const input = require("fs")
//   .readFileSync("/dev/stdin", "utf8")
//   .trim()
//   .split("\n");

const input = ["7 3"]; // <3, 6, 2, 7, 5, 1, 4>

let N = +input[0].split(" ")[0],
  K = +input[0].split(" ")[1],
  stack = [],
  output = "";

for (let i = 1; i <= N; i++) stack.push(i);

for (let i = 1; i <= N; i++) {
  output += stack.length > K ? stack[K - 1] + "\n" : stack.pop() + "\n";
  const left = stack.slice(0, K - 1);
  // console.log("left", left);
  stack.splice(0, K);
  // console.log("stack", stack);
  stack.push(...left);
}

console.log(output);
