//문자열 분석
//소문자, 대문자, 숫자, 공백

const question = `This is String
SPACE    1    SPACE
 S a M p L e I n P u T
0L1A2S3T4L5I6N7E8`;
// 10 2 0 2
// 0 10 1 8
// 5 6 0 16
// 0 8 9 0
// console.time('test')
const fs = require("fs");
const input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin", "utf8").trim().split("")
    : question;

const inputArr = input.split("\n");
let answer = [];

inputArr.map((str) => {
  //This is String
  const result = {
    smallcaseLen: 0,
    uppercaseLen: 0,
    numberLen: 0,
    spaceLen: 0,
  };
  const split1 = str.split(" ");
  result.spaceLen = split1.length - 1;
  split1.map((str1) => {
    //[This, is, String]
    const split2 = str1.split("");
    split2.map((str2) => {
      //[T, h, i, s]
      // console.log(str2, str2.charCodeAt());
      if (str2.charCodeAt() > 47 && str2.charCodeAt() < 58) {
        result.numberLen += 1;
      } else if (str2.charCodeAt() > 64 && str2.charCodeAt() < 91) {
        result.uppercaseLen += 1;
      } else if (str2.charCodeAt() > 96 && str2.charCodeAt() < 123) {
        result.smallcaseLen += 1;
      }
    });
  });
  // console.log(result, str);
  answer.push(Object.values(result).join(" "));
});

console.log(answer.join("\n"));
// console.timeEnd('test')