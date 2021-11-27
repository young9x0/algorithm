//스택
// const array = require("fs")
//   .readFileSync("/dev/stdin", "utf8")
//   .trim()
//   .split("\n");
// array.shift();

// const array = [
//   14,
//   "push 1",
//   "push 2",
//   "top",
//   "size",
//   "empty",
//   "pop",
//   "pop",
//   "pop",
//   "size",
//   "empty",
//   "pop",
//   "push 3",
//   "empty",
//   "top",
// ];
const array = [7, "pop", "top", "pop", "push 123", "top", "pop", "top", "pop"];

array.shift();

const stack = [];

const stackFun = {
  pop: () => stack.pop() || -1,
  size: () => stack.length,
  empty: () => (stack[0] ? 0 : 1),
  top: () => stack[stack.length - 1] || -1,
  push: (item) => {
    stack.push(item.split(" ")[1]);
    return "";
  },
};

const result = array.reduce((acc, val) => {
  return acc + (stackFun[val] ? `${stackFun[val]()}\n` : stackFun.push(val));
}, "");

console.log(result);
