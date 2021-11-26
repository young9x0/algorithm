const array = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");
// const array = [3, "((", "))", "())(()"];
// const array = [
//   6,
//   "(())())",
//   "(((()())()",
//   "(()())((()))",
//   "((()()(()))(((())))()",
//   "()()()()(()()())()",
//   "(()((())()(",
// ];
let answer = "";

for (let i = 1; i <= array[0]; i++) {
  let left = [],
    right = [],
    result = [];

  array[i].split("").map((ps) => {
    ps === "(" ? left.push(ps) : right.push(ps);
    left.length > right.length ? result.push(true) : result.push(false);
  });
  // console.log(result);
  answer +=
    left.length === right.length &&
    !result[result.length - 1] &&
    result.filter((res) => res).length > result.filter((res) => !res).length
      ? "YES\n"
      : "NO\n";
}
console.log(answer);
