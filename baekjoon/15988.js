//55.1, 2, 3 더하기 3
// 정답 참고 https://leylaoriduck.tistory.com/529
const question = `3
4
7
10`;
// 7
// 44
// 274

const fs = require('fs');

const inputs = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin', 'utf8').toString() : question).split('\n');
// n을 1, 2, 3의 합으로 나타내는 방법의 수를 1_000_000_009 로 나눈 나머지를 출력한다.

const cases = Number(inputs[0]);
inputs.shift();
const arr = [0, 1, 2, 4];
let num = Math.max(...inputs);

for (let j = 4; j <= num; j++) {
  arr[j] = (arr[j - 1] + arr[j - 2] + arr[j - 3]) % 1000000009;
}

for (let i = 0; i < cases; i++) {
  console.log(arr[inputs[i]]);
}
