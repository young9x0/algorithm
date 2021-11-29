// 에디터
// const input = require("fs")
//   .readFileSync("/dev/stdin", "utf8")
//   .trim()
//   .split("\n");

// const input = ["abcd", "3", "P x", "L", "P y"]; //abcdyx
// const input = ["abc", "9", "L", "L", "L", "L", "L", "P x", "L",  "B","P y",];//yxabc
// const input = ["dmih", "11", "B", "B", "P x", "L", "B","B", "B",  "P y", "D",  "D","P z",];//yxz

let str = input.shift();
const len = +input.shift();
let strIdx = 0;
let answer = "";

input.map((order, idx) => {
  const word = order.split(" ");
  console.log("word", word);
  switch (word[0]) {
    case "P":
      answer = !!answer ? answer + word[1] : str + word[1];
      strIdx = str.length - 1;
      console.log(answer, strIdx);
      break;
    case "L":
      strIdx = strIdx > 0 ? strIdx - 1 : 0;
      console.log(answer, strIdx);
      break;
    case "D":
      strIdx = strIdx === str.length - 1 ? str.length - 1 : strIdx - 1;
      console.log(answer, strIdx);
      break;
    case "B":
      if (strIdx > 0) {
        answer = str.substring(1);
        strIdx -= 1;
        console.log(answer, strIdx);
      }
      break;
  }
});

console.log(answer);
