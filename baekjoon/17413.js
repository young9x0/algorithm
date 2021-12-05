//단어뒤집기2
// const input = require("fs")
//   .readFileSync("/dev/stdin", "utf8")
//   .trim()
//   .split("\n");

// const input = ["baekjoon online judge"];
// const input = ["<open>tag<close>"];
// const input = ["<ab cd>ef gh<ij kl>"];
// const input = ["one1 two2 three3 4fourr 5five 6six"];
// const input = ["<int><max>2147483647<long long><max>9223372036854775807"];
const input = ["<problem>17413<is hardest>problem ever<end>"];
// const input = ["<   space   >space space space<    spa   c e>"];

let reverseArr = [],
  splitStr = [];

if (input[0][0] !== "<") {
  splitStr = input[0].split(" ");

  splitStr.map((str) =>
    str.split(" ").length > 1
      ? str
          .split(" ")
          .map((space, idx) =>
            reverseArr.push(
              space.split("").reverse().join("") +
                (idx < str.split(" ").length - 1 ? " " : "")
            )
          )
      : reverseArr.push(str.split("").reverse())
  );
} else {
  splitStr = input[0].split("<");
  console.log("splitStr", splitStr);
  splitStr.map((str) => {
    if (!!str) {
      const [lStr, rStr] = str.split(">");
      // console.log("lStr", lStr);
      // console.log("rStr", rStr);
      reverseArr.push(`<${lStr}>`);
      rStr &&
        (rStr.split(" ").length > 1
          ? rStr
              .split(" ")
              .map((space, idx) =>
                reverseArr.push(
                  space.split("").reverse().join("") +
                    (idx < rStr.split(" ").length - 1 ? " " : "")
                )
              )
          : reverseArr.push(rStr.split("").reverse().join("")));
    }
  });
}

// console.log("reverseArr", reverseArr);
const result = reverseArr.reduce((acc, val, idx) => {
  return reverseArr[0][0] !== "<" ? acc + val.join("") + " " : acc + val;
}, "");
console.log(result);
