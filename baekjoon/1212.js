// 8진수 2진수

const question = "3147"; //11001100

const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin", "utf8").toString()
    : question
).split("\n");

let result = [];

input[0].split("").map((str) => {
  const num = Number(str);

  // console.log("num", num);
  if (num < 2) {
    result.push(num % 2 ? "001" : "000");
  } else if (num < 4 && num >= 2) {
    result.push(num % 2 ? "011" : "010");
  } else if (num < 6 && num >= 4) {
    result.push(num % 2 ? "101" : "100");
  } else if (num >= 6) {
    result.push(num % 2 ? "111" : "110");
  }
  // console.log("result", result);
});
console.log(Number(result.join("")));
