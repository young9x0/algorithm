// ROT13

// const question = `Baekjoon Online Judge`;
const question = `One is 1`;

// console.time('test')
const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin", "utf8").toString()
    : question
).split("\n");

let result = "";

for (let str of input[0]) {
  // console.log(str);
  if (str.charCodeAt() > 64 && str.charCodeAt() < 91) {
    if (str.charCodeAt() + 13 < 91) {
      result += String.fromCharCode(str.charCodeAt() + 13);
    } else {
      result += String.fromCharCode(64 + (str.charCodeAt() + 13 - 90));
    }
  } else if (str.charCodeAt() > 96 && str.charCodeAt() < 123) {
    if (str.charCodeAt() + 13 < 123) {
      result += String.fromCharCode(str.charCodeAt() + 13);
    } else {
      result += String.fromCharCode(96 + (str.charCodeAt() + 13 - 122));
    }
  } else {
    result += str;
  }
}
console.log(result);
