const array = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

// const array = [2, "I am happy today", "We want to win the first prize"];

for (let i = 1; i <= array[0]; i++) {
  let arr = [];
  array[i].split(" ").map((str) => {
    let strTemp = "";
    strTemp = str.split("").reverse().join("");
    arr.push(strTemp);
  });
  // console.log(arr);
  console.log(arr.join(" "));
}
