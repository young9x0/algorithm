//가장 긴 증가하는 부분 수열

const question = `6
10 20 10 30 20 50 40 70 80 90 50 40 110 100`; //4

const fs = require('fs');
const input = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin', 'utf8').toString() : question).split('\n');

const sequence = input[1].split(' ').map(Number);
// console.log(sequence);
let prev = sequence[0],
  count = 1;
sequence.map((int) => {
  if (prev < int) {
    prev = int;
    count++;
  }
});
console.log(count);
