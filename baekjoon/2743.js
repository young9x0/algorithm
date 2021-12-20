// 단어 길이 재기

const question = `pulljima`;

// console.time('test')
const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin", "utf8").toString()
    : question
).split("\n");

console.log(input[0].length);
