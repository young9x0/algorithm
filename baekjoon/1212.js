// 8진수 2진수

const question = "314"; //11001100

const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin", "utf8").toString()
    : question
).split("\n");

let result = [];

input[0]
  .split("")
  .reverse()
  .map((str) => {
    let flag = true;
    divideWithTwo(Number(str), flag);

    // console.log("result", result);
  });
function divideWithTwo(num, flag) {
  // console.log("num", num);
  // console.log("flag", flag);

  if (num > 1) {
    if (!(num % 2)) {
      flag && result.push(0);
      divideWithTwo(num / 2, flag);
    } else {
      flag = false;
      result.push(1);
      divideWithTwo(num - 1, flag);
    }
  } else {
    num ? result.push(1) : result.push(0);
  }
  if (result.length % 3) {
    for (let i = 0; i < result.length % 3; i++) result.push(0);
  }
}
console.log(Number(result.reverse().join("")));
