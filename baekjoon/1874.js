// //스택수열
// const result = require("fs")
//   .readFileSync("/dev/stdin", "utf8")
//   .trim()
//   .split("\n");
const result = [8, 4, 3, 6, 8, 7, 5, 2, 1];
// const result = [5, 1, 2, 5, 3, 4];
// const result = [5, 1, 2, 5, 4, 3];
// const result = [5, 3, 5, 4, 2, 1];

let answer = "",
  stack = [],
  resultTemp = [],
  lastIdx = 0;

result.shift();

result.map((res) => {
  //res =
  if (res > lastIdx) {
    for (let i = lastIdx + 1; i <= res; i++) {
      answer += "+\n";
      stack.push(i);
      // stack=
    }
    lastIdx = res;
    //lastIdx =
  }
  if (res <= lastIdx && stack[stack.length - 1] <= res) {
    resultTemp.push(res); //
    stack.pop();
    //stack=
    answer += "-\n";
  }
});
// console.log(result, resultTemp);
resultTemp.some((res, idx) => res !== result[idx]) && (answer = "No");
console.log(answer);
