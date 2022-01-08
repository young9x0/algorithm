//2진수 8진수
// https://hianna.tistory.com/386
// parseInt("10", 2); // 2
// 파라미터 "10"을 2진법으로 읽어서, 10진법으로 변환한 값을 리턴

const question = "11001100"; //314

const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin", "utf8").toString()
    : question
).split("\n");

let temp = [],
  result = 0;

input[0]
  .split("")
  .reverse()
  .map((str, idx) => {
    const num = Number(str);
    // console.log(num, idx % 3, result, temp);
    if (!(idx % 3)) {
      result += num;
    } else {
      result += num * (2 * (idx % 3));
    }
    if ((idx + 1) % 3 === 0 || idx === input[0].length - 1) {
      temp.push(result);
      result = 0;
    }
  });
console.log(temp.reverse().join(""));
