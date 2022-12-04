//54.합분해
//정답 참고 https://amunre21.github.io/boj/3-2225/

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
      DP[k][n] = (DP[k - 1][n] + (DP[k][n - 1] || 0)) % 1000000000;
      // 왜 나머지를 이곳에서 나누어야 하는지?
      // 질문 답 참고 https://www.acmicpc.net/board/view/16115
      // 원래 마지막 답 낼때 나눠줘도 되지만 그렇게 할 경우 int가 가질 수 있는 범위를 넘어서게 되면서 오버플로우가 발생해서 답이 틀려지는 걸로 생각합니다.
    }
  }
}

// console.log('DP', DP);

console.log(DP[K - 1][N]);
