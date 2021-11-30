// // 에디터
// const input = require("fs")
//   .readFileSync("/dev/stdin", "utf8")
//   .trim()
//   .split("\n");

// //L= left, D= right, B= delete, P $ = plus $
const input = ["abcd", "3", "P x", "L", "P y"]; //abcdyx
// // const input = ["abc", "9", "L", "L", "L", "L", "L", "P x", "L", "B", "P y"]; //yxabc
// // const input = [
// //   "dmih",
// //   "11",
// //   "B",
// //   "B",
// //   "P x",
// //   "L",
// //   "B",
// //   "B",
// //   "B",
// //   "P y",
// //   "D",
// //   "D",
// //   "P z",
// // ]; //yxz

let lStack = input[0].split(""),
  rStack = [];

input.map((order, idx) => {
  if (idx > 1) {
    const [cmd, word] = order.split(" ");
    // console.log("word", word);
    switch (cmd) {
      case "P":
        lStack.push(word);
        // console.log(lStack, rStack);
        break;
      case "L":
        lStack.length && rStack.push(lStack.pop());
        // console.log(lStack, rStack);
        break;
      case "D":
        rStack.length && lStack.push(rStack.pop());
        // console.log(lStack, rStack);
        break;
      case "B":
        lStack.pop();
        break;
    }
  }
});

console.log(lStack.join("") + rStack.reverse().join(""));
