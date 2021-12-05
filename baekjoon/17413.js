//단어뒤집기2
// const input = require("fs")
//   .readFileSync("/dev/stdin", "utf8")
//   .trim()
//   .split("\n");

// const input = ["baekjoon online judge"];
const input = ["<open>tag<close>"];
// const input = ["<ab cd>ef gh<ij kl>"];
// const input = ["one1 two2 three3 4fourr 5five 6six"];
// const input = ["<int><max>2147483647<long long><max>9223372036854775807"];
// const input = ["<problem>17413<is hardest>problem ever<end>"];
// const input = ["<   space   >space space space<    spa   c e>"];

// console.time("algorithm");
let result = "",
  temp = [],
  canFlip = true;

const str = input[0];

for (let i = 0; i < str.length; i++) {
  if (str[i] === "<") {
    canFlip = false;
  }
  if (str[i] === ">") {
    canFlip = true;
    result += str[i];
    continue;
  }

  if (canFlip && str[i] !== " ") {
    temp.push(str[i]);
  } else if (!canFlip || str[i] === " ") {
    while (temp.length) {
      // console.log(temp);
      result += temp.pop();
    }
    result += str[i];
  }
}

while (temp.length) {
  result += temp.pop();
}

console.log(result);
// console.timeEnd("algorithm");
