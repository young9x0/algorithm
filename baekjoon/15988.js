//55.1, 2, 3 더하기 3

const question = `3
4
7
10`;
// 7
// 44
// 274

const fs = require('fs');

const input = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin', 'utf8').toString() : question).split('\n');
// n을 1, 2, 3의 합으로 나타내는 방법의 수를 1_000_000_009 로 나눈 나머지를 출력한다.

const DP = [
  [1, 0, 0],
  [1, 1, 0],
];
const answer = [];

for (let t = 1; t <= input[0]; t++) {
  let n = input[t];
  for (let i = 1; i < input[t]; i++) {
    DP[i + 1] = [];
    DP[i + 1][0] = (DP[i][0] + DP[i][1] + DP[i][2]) % 1_000_000_009;
    DP[i + 1][1] = DP[i][0];
    DP[i + 1][2] = DP[i][1];
  }
  // console.log('DP', DP[n][0]);
  answer.push(DP[n][0]);
}
console.log(answer.join('\n'));
