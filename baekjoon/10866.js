//덱
// const inputs = require("fs")
//   .readFileSync("/dev/stdin", "utf8")
//   .trim()
//   .split("\n");

const inputs = [
  15,
  "push_back 1",
  "push_front 2",
  "front",
  "back",
  "size",
  "empty",
  "pop_front",
  "pop_back",
  "pop_front",
  "size",
  "empty",
  "pop_back",
  "push_front 3",
  "empty",
  "front",
];
// 2
// 1
// 2
// 0
// 2
// 1
// -1
// 0
// 1
// -1
// 0
// 3
// const input = [7, "pop", "top", "pop", "push 123", "top", "pop", "top", "pop"];

inputs.shift();
let deque = [];

const dequeMethod = {
  push: (str) => {
    const [input, int] = str.split(" ");

    input === "push_front" ? deque.splice(0, 0, +int) : deque.push(+int);
    // console.log(deque);
    return "";
  },
  pop_front: () => (deque[0] ? deque.shift() : -1),
  pop_back: () => (deque[0] ? deque.pop() : -1),
  size: () => deque.length,
  empty: () => (deque[0] ? 0 : 1),
  back: () => deque[deque.length - 1] || -1,
  front: () => deque[0] || -1,
};

const result = inputs.reduce((acc, str) => {
  return (
    acc + (dequeMethod[str] ? `${dequeMethod[str]()}\n` : dequeMethod.push(str))
  );
}, "");

console.log(result);
