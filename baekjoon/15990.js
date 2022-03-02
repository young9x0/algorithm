//1, 2, 3 더하기 5

const question = `3
4
7
10`;
// 3
// 9
// 27

const fs = require('fs');
const input = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin', 'utf8').trim() : question).split('\n');
let result = [];

input.map((N, idx) => {
  if (idx > 0) {
    const num = Number(N);
    let count = 0;
    result.push(count / 1000000009);
  }
});
console.log(result.join('\n'));
