//진법 변환

const question = `ZZZZ2 36`;
// const question = `112 3`;
// 60466175

const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin", "utf8").trim()
    : question
).split("\n");

const [N, radix] = input[0].split(" ");

let result = 0;

N.split("")
  .reverse()
  .map((str, idx) => {
    if (str.charCodeAt() > 64) {
      // console.log(str.charCodeAt() - 55);
      result += Math.pow(radix, idx) * (str.charCodeAt() - 55);
    } else {
      result += Math.pow(radix, idx) * Number(str);
    }
  });
console.log(result);
