//62. 11054 가장 긴 바이토닉 부분 수열
//2/5 am 11:36 - pm 12:55

const question = `10
1 5 2 1 4 3 4 5 2 1`; //1 2 34521
//7

const fs = require('fs');
const inputs = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin', 'utf8').toString() : question).split('\n');

const [N, S] = inputs;
const list = S.split(' ').map(Number);

const dp = [Array(Number(N)).fill(1), Array(Number(N)).fill(1)];

for (let i = 0; i < N; i++) {
  let maxLeft = 0;

  for (let j = 0; j < N; j++) {
    if (i > j && list[i] > list[j] && dp[0][j] > maxLeft) {
      maxLeft = dp[0][j];
      dp[0][i] += 1;
    }
  }
}

for (let i = N - 1; i > -1; i--) {
  //   console.log('-------i', i, list[i]);
  let maxRight = 0;

  for (let j = N - 1; j > -1; j--) {
    if (i < j && list[i] > list[j] && dp[1][j] > maxRight) {
      //   console.log('-j', j, list[j]);
      maxRight = dp[1][j];
      //   console.log('maxRight', maxRight);
      dp[1][i] += 1;
    }
  }
  //   console.log('dp[i]', dp[1][i]);
}

for (let i = 0; i < N; i++) {
  dp[0][i] += dp[1][i];
  dp[0][i] -= 1;
}
// console.log(dp);
console.log(Math.max(...dp[0]));
