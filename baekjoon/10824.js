// 네 수

const question = `10 20 30 40`;

const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin", "utf8").toString()
    : question
).split("\n");

const str = input[0].split(" ");
const int1 = parseInt(str[0] + str[1]);
const int2 = parseInt(str[2] + str[3]);
console.log(int1 + int2);
