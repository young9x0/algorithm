const array = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");
array.shift();
// const array = [2, "I am happy today", "We want to win the first prize"];
let result = "",
  answer = "",
  arr = [];

for (let i = 1; i <= array[0]; i++) {
  array[i].split(" ").map((str, idx) => {
    let strTemp = "";
    str.split("").map((word, index) => {
      arr[idx] = [];
      strTemp += str[str.length - (index + 1)];

      arr[idx].push(strTemp);
    });
  });

  result = arr.flat().reduce((acc, val) => acc + val + " ", "");
  answer += result + "\n";
}
console.log(answer);
