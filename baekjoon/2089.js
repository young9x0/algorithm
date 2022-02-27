//-2진수

const question = '7'; //110111

const fs = require('fs');
const input = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin', 'utf8').toString() : question).split('\n');

let list = [1],
  N = input[0];
if (N === 0) console.log(N);

while (N !== 1) {
  list.push(Math.abs(N % 2));
  N = Math.floor(N / 2);
  console.log(N);
}
console.log(list.reverse().join(''));
