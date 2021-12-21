// 나머지
// 첫째 줄에 (A+B)%C, 둘째 줄에 ((A%C) + (B%C))%C, 셋째 줄에 (A×B)%C, 넷째 줄에 ((A%C) × (B%C))%C를 출력한다.

const question = `5 8 4`;
// 1
// 1
// 0
// 0
const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin", "utf8").toString()
    : question
).split("\n");

let result = "";
const splited = input[0].split(" ").map(Number);

result += ((splited[0] + splited[1]) % splited[2]) + "\n";
result +=
  (((splited[0] % splited[2]) + (splited[1] % splited[2])) % splited[2]) + "\n";
result += ((splited[0] * splited[1]) % splited[2]) + "\n";
result +=
  (((splited[0] % splited[2]) * (splited[1] % splited[2])) % splited[2]) + "\n";

console.log(result);
