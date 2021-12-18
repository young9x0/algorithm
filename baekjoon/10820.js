// 문자열 분석
// 소문자, 대문자, 숫자, 공백

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
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin", "utf8").toString() //trim()쓰면 틀림
    : question
).split("\n");

let answer = "";

input.map((str) => {
  if (str === "") return; //이 부분 빼면 틀림
  //This is String
  const result = {
    smallcaseLen: 0,
    uppercaseLen: 0,
    numberLen: 0,
    spaceLen: 0,
  };
  let i = 0;
  const strLen = str.length;
  // console.log(strLen)
  while (i < strLen) {
    if (str[i].charCodeAt() > 47 && str[i].charCodeAt() < 58) {
      result.numberLen += 1;
    } else if (str[i].charCodeAt() > 64 && str[i].charCodeAt() < 91) {
      result.uppercaseLen += 1;
    } else if (str[i].charCodeAt() > 96 && str[i].charCodeAt() < 123) {
      result.smallcaseLen += 1;
    } else {
      result.spaceLen += 1;
    }
    i++;
  }

  // console.log(result, str);
  answer += Object.values(result).join(" ") + "\n";
});

console.log(answer);

//https://leylaoriduck.tistory.com/488 참고
input.map((str) => {
  //This is String
  // console.log(idx, str);
  if (str === "") return;
  const result = [0, 0, 0, 0];

  const strLen = str.length;
  // console.log(strLen)
  for (let i = 0; i < strLen; i++) {
    // console.log(i,str[i])
    if (str[i].charCodeAt() > 96 && str[i].charCodeAt() < 123) {
      result[0] += 1;
    } else if (str[i].charCodeAt() > 64 && str[i].charCodeAt() < 91) {
      result[1] += 1;
    } else if (str[i].charCodeAt() > 47 && str[i].charCodeAt() < 58) {
      result[2] += 1;
    } else {
      result[3] += 1;
    }
  }

  answer += result.join(" ") + "\n";
});

console.log(answer.trim());
// // console.timeEnd('test')
