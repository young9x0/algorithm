//스택수열
const result = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");
// const result = [8, 4, 3, 6, 8, 7, 5, 2, 1];
// const result = [5, 1, 2, 5, 3, 4];

let answer = "";

let stack = [],
  temp = [],
  lastIdx = 0;

for (let i = 1; i <= result[0]; i++) {
  stack.push(i);
}
result.shift();
// console.log(stack);
result.map((res) => {
  stack.map((val) => {
    // console.log(res, val);
    //res = 4,3,6
    if (res > val && lastIdx < val) {
      lastIdx = val;
      //lastIdx =1,2,3,4,5
      answer += "+\n";
    }
    if (res === val) {
      //res,val = 4,3,6
      if (lastIdx < val) {
        lastIdx = val;
        //lastIdx = 6
        answer += "+\n";
      }
      if (lastIdx === val || temp[temp.length - 1] > val) {
        temp.push(val); //4,3,6
        answer += "-\n";
      }
    }
  });
});
// console.log(result, temp);
result.some((res, idx) => res !== temp[idx]) && (answer = "No");
console.log(answer);
