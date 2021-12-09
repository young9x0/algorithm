// 오등큰수  NGF
// const input = require("fs")
//   .readFileSync("/dev/stdin", "utf8")
//   .trim()
//   .split("\n");

const input = [
  `7
1 1 2 3 4 2 1
`,
]; // -1 -1 1 2 2 1 -1

// console.time("test");
let inputStack = [],
  result = [],
  splitInput = [];

splitInput = input[0].split("\n")[1].split(" ");

console.log("splitInput", splitInput);
splitInput.map((list, idx) => {
  let existCount = 0,
    index = 0;
  while (splitInput.length > index) {
    if (list === splitInput[index]) {
      existCount++;
    }

    index++;
  }
  inputStack[list] = existCount;
});
inputStack.map((count, idx) => {
  if (idx > 0) {
    let index = 1;
    while (inputStack.length > index) {
      if (count < inputStack[index]) {
        result[idx] = splitInput[idx];
      }
      index++;
    }
  }
});
console.log("result", result);
// console.timeEnd("test");
