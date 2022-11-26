//54.합분해

const question = `20 2`; //21 //N K
// const question = `6 4`; //84

const fs = require('fs');
const input = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin', 'utf8').toString() : question).split('\n');
//첫째 줄에 답을 1,000,000,000으로 나눈 나머지를 출력한다.

const splited = input[0].split(' ');
const DP = [];
const K = splited[1];
const N = splited[0];
//DP[K][N] = DP[K-1][0] + ... + DP[K-1][N]

for (let k = 0; k < K; k++) {
  DP[k] = [];

  for (let n = 0; n <= N; n++) {
    DP[k].push(n);

    if (k === 0) {
      DP[k][n] = 1;
    }

    if (k > 0) {
      DP[k][n] = DP[k - 1][n] + (DP[k][n - 1] || 0);
    }
  }
}

// console.log('DP', DP);
console.log(DP[K - 1][N] % 1000000000);
