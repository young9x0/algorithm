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

let output = "",
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
          output += queue[0] + "\n";
          queue = queue.slice(1);
        } else {
          output += -1 + "\n";
        }

        break;

      case "size":
        output += queue.length + "\n";

        break;

      case "empty":
        output += (queue.length === 0 ? 1 : 0) + "\n";

        break;

      case "front":
        output += (queue.length === 0 ? -1 : queue[0]) + "\n";

        break;

      case "back":
        output += (queue.length === 0 ? -1 : queue[queue.length - 1]) + "\n";

        break;
    }
  }
});

console.log(output);
