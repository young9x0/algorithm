//60. 11055 가장 큰 증가 부분 수열
//1/20 pm 8:50 - 1/21 am 12:30
//해설: https://leylaoriduck.tistory.com/527
const question = `10
1 100 2 50 60 3 5 6 7 8`;
//113

const fs = require('fs');

const inputs = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin', 'utf8').toString() : question).split('\n');
const [N, A] = inputs;
const arr = A.split(' ').map(Number);
const dp = [arr[0]];

for (let i = 0; i < N; i++) {
  let max = 0;

  for (let j = 0; j < i; j++) {
    if (arr[j] < arr[i] && dp[j] > max) {
      // dp[j] > max : arr[i]가 자기보다 전 순서의 수 중 자신보다 작은 수를 모두 더해버리는 것을 막기
      max = dp[j];
    }
  }

  dp[i] = max + arr[i];
  // console.log(i, dp);
}

console.log(Math.max(...dp));
