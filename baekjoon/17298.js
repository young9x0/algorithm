// 오큰수  NGE
// const input = require("fs")
//   .readFileSync("/dev/stdin", "utf8")
//   .trim()
//   .split("\n");

const input = ["4 3 5 2 7"]; // 5 7 7 -1
// const input = ["4 9 5 4 8"]; // -1 8 8 -1
// console.time("test");
let stack = [],
  result = 0,
  splitInput = [],
  before = "";

splitInput = input[0].split(" ");

console.log(splitInput);
// console.timeEnd("test");
