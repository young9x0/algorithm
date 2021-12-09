// 오등큰수  NGF
const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `7
1 1 2 3 4 2 1`
)
  .split("\n")[1]
  .split(" ")
  .map((a) => +a);

// console.time("test");
let cInfo = {},
  result = [],
  stack = [];
// console.log("input", input);
input.map((num) => {
  cInfo[num] = (cInfo[num] || 0) + 1;
});

// console.log("cInfo", cInfo);
//{ '0': 4, '1': 3, '2': 2, '3': 1, '4': 1 }
result = new Array(input.length).fill(-1);

for (let i = 0; i < input.length; i++) {
  // console.log(i, stack);
  while (
    stack.length &&
    cInfo[input[stack[stack.length - 1]]] < cInfo[input[i]]
  ) {
    // console.log("while", i, stack, result);
    result[stack.pop()] = input[i];
  }
  stack.push(i);
  // console.log(i, stack);
}

//시간초과
// input.map((list) => {
//   let existCount = 0,
//     index = 0;
//   while (input.length > index) {
//     if (list === input[index]) {
//       existCount++;
//     }

//     index++;
//   }
//   cStack[list] = existCount;
// });
// // console.log("cStack", cStack);
// input.map((list, idx) => {
//   let index = idx;
//   while (cStack[input[index]] <= cStack[list]) {
//     ++index;
//   }
//   // console.log(idx, "index", index);
//   index < input.length && (result[idx] = input[index]);
// });
console.log(result.join(" ")); // -1 -1 1 2 2 1 -1
// console.timeEnd("test");
