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
  2: 0,
  3: 0,
};
function checkFactors(num) {
  for (let idx = 1; num >= 3 * idx; idx++) {
    checkLength[3]++;
  }
  console.log(checkLength);
}
checkFactors(6);
