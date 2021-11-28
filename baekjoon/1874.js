// //스택수열
// const input = require("fs")
//   .readFileSync("/dev/stdin", "utf8")
//   .trim()
//   .split("\n");

//둘째 줄부터 n개의 줄에는 수열을 이루는 1이상 n이하의 정수가 하나씩 순서대로 주어진다.
// const input = [8, 4, 3, 6, 8, 7, 5, 2, 1];
input.shift();
const nums = input.map((v) => +v);

let answer = "",
  stack = [],
  lastIdx = 1;

nums.map((res) => {
  while (res >= lastIdx) {
    stack.push(lastIdx);
    answer += "+\n";
    lastIdx++;
  }
  // console.log(stack);
  if (stack[stack.length - 1] === res) {
    stack.pop();
    answer += "-\n";
  }
});
stack.length > 0 && (answer = "NO");
console.log(answer);
