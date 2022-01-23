//1로 만들기

// const question = `25`; //3
// const question = `2`; //1
const question = `10`; //3

const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin', 'utf8').toString().trim()
    : question
).split('\n');

const N = Number(input[0]);
let count = 0;

multiple(N, 3);

function multiple(num, idx) {
  // console.log(num, idx, count);
  if (num > 0) {
    if (num >= idx) {
      let multipleIdx = 1;
      while (num >= Math.pow(idx, multipleIdx)) {
        multipleIdx++;
      }
      count += multipleIdx - 1;
      multiple(num - Math.pow(idx, count), idx - 1);
    } else if (num < idx) {
      count += 1;
    }
  }
  return count;
}

console.log(count);
