//괄호
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

// for (let i = 1; i <= 1; i++) {
for (let i = 1; i <= array[0]; i++) {
  let temp = [];
  array[i].split("").map((ps, idx) => {
    temp.push(ps);
    idx >= 1 &&
      temp[temp.length - 2] === "(" &&
      temp[temp.length - 1] === ")" &&
      temp.splice(temp.length - 2, 2);
    // console.log(idx, "temp", temp);
  });

  // console.log(" last temp", temp);
  answer += temp.length > 0 ? "NO\n" : "YES\n";
}
console.log(answer);
