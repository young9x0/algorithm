//65. 17404 RGB거리 2
//2/26 am 10:41 - pm 01:07
//해설: https://hongjw1938.tistory.com/77

// const question = `3
// 26 40 83
// 49 60 57
// 13 89 99`; //110
// const question = `3
// 1 100 100
// 100 1 100
// 100 100 1`; //3
// const question = `3
// 1 100 100
// 100 100 100
// 1 100 100`; //201
// const question = `6
// 30 19 5
// 64 77 64
// 15 19 97
// 4 71 57
// 90 86 84
// 93 32 91`; //208
const question = `8
71 39 44
32 83 55
51 37 63
89 29 100
83 58 11
65 13 15
47 25 29
60 66 19`; //253

const fs = require('fs');
const inputs = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin', 'utf8').toString() : question).split('\n');

const [N, ...COST] = inputs;
const n = Number(N);

const cost = COST.map((str) => str.split(' ').map(Number));
// console.log(n, cost);

const dp = new Array(n);
let result = 1000 * 1000;

for (let i = 0; i < 3; i++) {
  //i = RGB 중 최소값을 가진 index
  dp[0] = [];

  for (let j = 0; j < 3; j++) {
    //j = RGB 각각에 대해 첫번째 집의 최소값 고정
    if (i === j) {
      dp[0][j] = cost[0][i];
    } else {
      dp[0][j] = 1000 * 1000 + 1;
    }
  }

  for (let k = 0; k < n - 1; k++) {
    // k = 두번째부터의 집의 수
    dp[k + 1] = [];
    dp[k + 1][0] = cost[k + 1][0] + Math.min(dp[k][1], dp[k][2]);
    dp[k + 1][1] = cost[k + 1][1] + Math.min(dp[k][0], dp[k][2]);
    dp[k + 1][2] = cost[k + 1][2] + Math.min(dp[k][1], dp[k][0]);
  }
  // console.log(dp);

  for (let k = 0; k < 3; k++) {
    // k = 집의 수
    if (i === k) continue;

    result = Math.min(result, dp[n - 1][k]);
  }
}

console.log(result);
