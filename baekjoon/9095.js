//1, 2, 3 더하기

const question = `3
4
7
10`;
// 7
// 44
// 274

const fs = require('fs');
const input = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin', 'utf8').toString().trim() : question).split(
  '\n',
);

// console.log(input);
// input.map(n=>{
//   const num = Number(n)
//   if(num>3){

//   }
// })

const checkLength = {
  1: 0,
  2: { 1: 1 },
  3: { 1: 2, 2: 1, 3: 0 }, //3
  4: { 1: 4, 2: 2, 3: 1 }, //7
  5: { 1: 7, 2: 4, 3: 2 }, //12
  6: { 1: 12, 2: 7, 3: 4 }, //23
  7: { 1: 23, 2: 9, 3: 5 },
};
function makeCheckLength(raw) {
  for (let num = 4; num <= raw; num++) {
    let twoDivideCheck = 2,
      threeDivideCheck = 1;
    if (num % 2 === 0) twoDivideCheck = 3;
    if (num % 3 === 0) threeDivideCheck = 2;
    console.log('num', num);
    console.log('twoDivideCheck', twoDivideCheck);
    console.log('threeDivideCheck', threeDivideCheck);
    checkLength[num] = {
      1: checkLength[num - 1][1] + checkLength[num - 1][2] + checkLength[num - 1][3],
      2: checkLength[num - 1][2] + twoDivideCheck,
      3: checkLength[num - 1][3] + threeDivideCheck,
    };
    console.log(checkLength);
  }
}
makeCheckLength(7);
