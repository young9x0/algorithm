//61. 11722 가장 긴 감소하는 부분 수열
//1/29 pm 8:44 - pm 11:35
//해설: https://leylaoriduck.tistory.com/528
// const question = `1
// 10`;
const question = `6
10 30 10 20 20 10`;
// // 3;
// const question = `11
// 10 9 30 20 10 8 7 6 20 20 10`;

const fs = require('fs');

const inputs = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin', 'utf8').toString() : question).split('\n');
const [total, str] = inputs;
const arr = str.split(' ').map(Number);
const N = Number(total);

const dp = Array(N).fill(0);

for (let i = 0; i < N; i++) {
  let max = 0;

  // console.log('arr[i]', arr[i]);
  for (let j = 0; j < i; j++) {
    if (arr[j] > arr[i] && dp[j] > max) {
      // console.log('arr[j]', arr[j]);
      max = dp[j];
    }
  }

  // console.log('max', max);
  dp[i] = max + 1;
}

// console.log(dp);
console.log(Math.max(...dp));
