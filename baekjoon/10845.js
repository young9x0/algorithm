// 큐
// const input = require("fs")
//   .readFileSync("/dev/stdin", "utf8")
//   .trim()
//   .split("\n");

const input = [
  15,
  "push 1",
  "push 2",
  "front",
  "back",
  "size",
  "empty",
  "pop",
  "pop",
  "pop",
  "size",
  "empty",
  "pop",
  "push 3",
  "empty",
  "front",
];
// 1
// 2
// 2
// 0
// 1
// 2
// -1
// 0
// 1
// -1
// 0
// 3

let answer = [],
  queue = [];

// console.log([1, 2, 3].pop());

input.map((order, idx) => {
  if (idx > 0) {
    const [cmd, num] = order.split(" ");
    // console.log(cmd, "queue", queue);

    switch (cmd) {
      case "push":
        queue.push(+num);
        break;
      case "pop":
        if (!!queue.length) {
          answer.push(queue[0]);
          queue = queue.slice(1);
        } else {
          answer.push(-1);
        }
        break;
      case "size":
        answer.push(queue.length);
        break;
      case "empty":
        !queue.length ? answer.push(1) : answer.push(0);
        break;
      case "front":
        !!queue.length && answer.push(queue[0]);
        break;
      case "back":
        !!queue.length && answer.push(queue[queue.length - 1]);
        break;
    }
  }
});

console.log(answer.join("\n"));
