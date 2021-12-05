// // 요세푸스 문제
// const input = require("fs")
//   .readFileSync("/dev/stdin", "utf8")
//   .trim()
//   .split("\n");

const input = ["7 3"]; // <3, 6, 2, 7, 5, 1, 4>

const [N, K] = input[0].split(" ").map((x) => Number(x));
const arr = new Array(N).fill(0).map((el, i) => i + 1);
// console.log(N, K);

// let N = +input[0].split(" ")[0],
//   K = +input[0].split(" ")[1],
//   stack = [],
//   output = [],
//   answer = "";

// for (let i = 1; i <= N; i++) stack.push(i);

// for (let i = 0; i < N; i++) {
//   stack.length > K ? output.push(stack[K - 1]) : output.push(stack.pop());
//   const left = stack.slice(0, K - 1);
//   // console.log("left", left);
//   stack.splice(0, K);
//   // console.log("stack", stack);
//   stack.push(...left);
// }

// output.map(
//   (num, idx) =>
//     (answer += idx === 0 ? `<${num},` : idx === N - 1 ? ` ${num}>` : ` ${num},`)
// );

// console.log(answer);

let answer = "<";

while (arr.length) {
  for (let i = 0; i < K; i++) {
    arr.push(arr.shift());
  }

  if (arr.length === 1) {
    answer += `${arr.pop()}>`;
  } else {
    answer += `${arr.pop()}, `;
  }
}
console.log(answer);
