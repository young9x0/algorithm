//61. 11722 가장 긴 감소하는 부분 수열
//1/29 pm 8:44 -
//해설:
const question = `1
10`;
// const question = `6
// 10 30 10 20 20 10`;
// // 3;
// const question = `11
// 10 9 30 20 10 8 7 6 20 20 10`;

const fs = require('fs');

const inputs = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin', 'utf8').toString() : question).split('\n');
const [total, str] = inputs;
const arr = str.split(' ').map(Number);
const N = Number(total);

const dp = Array(N).fill(1);

for (let i = 0; i < N - 1; i++) {
  let idx = i,
    count = 1;

  // console.log('arr[i]', i, arr[i]);
  for (let j = i; j < N; j++) {
    // console.log('arr[j]', j, arr[j]);

    if (arr[i] < arr[j]) {
      break;
    }

    if (arr[idx] < arr[j]) {
      idx = j;
      dp[i] = Math.max(dp[i], count);
      count = 0;
    }

    // console.log('arr[idx]', arr[idx]);
    if (arr[i] > arr[j] && arr[idx] >= arr[j]) {
      idx = j;
      count += 1;
      // console.log('dp[i]', dp[i]);
    }
  }

  dp[i] = Math.max(dp[i], count);
}
// console.log(dp);
console.log(Math.max(...dp));
