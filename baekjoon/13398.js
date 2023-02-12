//63. 13398 연속합2
//2/12 pm 4:17 - 5:59
//해설: https://leylaoriduck.tistory.com/535

const question = `10
10 -4 3 1 5 6 -35 12 21 -1`; //54

const fs = require('fs');
const inputs = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin', 'utf8').toString() : question).split('\n');

const [n, str] = inputs;
const N = Number(n);
const list = str.split(' ').map(Number);
// console.log(N, list);
const dpAll = [list[0]];
const dpJump = [list[0]];

for (let i = 1; i < N; i++) {
  dpAll[i] = Math.max(dpAll[i - 1] + list[i], list[i]);
}

for (let i = 1; i < N; i++) {
  dpJump[i] = Math.max(dpJump[i - 1] + list[i], dpAll[i - 1]);
}

console.log(Math.max(...dpAll, ...dpJump));
