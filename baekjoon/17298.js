// 오큰수  NGE
const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `4
9 5 4 8`
)
  .split("\n")[1]
  .split(" ")
  .map((a) => +a);

let result = new Array(input.length).fill(-1),
  stack = [];

input.map((num, idx) => {
  while (stack.length && input[stack[stack.length - 1]] < num) {
    result[stack.pop()] = num;
  }
  stack.push(idx);
});

console.log(result.join(" "));
