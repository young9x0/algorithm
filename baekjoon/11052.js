//카드 구매하기

// const question = `4
// 1 5 6 7`; //10
// const question = `5
// 10 9 8 7 6`; //50
// const question = `10
// 1 1 2 3 5 8 13 21 34 55`; //55
const question = `10
5 10 11 12 13 30 35 40 45 47`; //50
// const question = `4
// 5 2 8 10`; //20
// const question = `4
// 3 5 15 16`; //18

const fs = require('fs');
const input = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin', 'utf8').toString().trim() : question).split(
  '\n',
);
const N = +input[0];
const splited = input[1].split(' ').map(Number);
let dp = [0, ...splited];
// console.log('dp', dp);

for (let i = 2; i < dp.length; i++) {
  for (let j = 1; j < i; j++) {
    // console.log(i, j, dp[i], dp[i - j], dp[j]);
    dp[i] = Math.max(dp[i], dp[i - j] + dp[j]);
  }
}
// console.log('dp', dp);
console.log(dp[N]);
