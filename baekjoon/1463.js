//1로 만들기
//https://mizzo-dev.tistory.com/entry/baekjoon1463

// const question = `25`; //6
// const question = `2`; //1
const question = `10`; //3

const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin', 'utf8').toString().trim()
    : question
).split('\n');

const num = Number(input[0]);
let count = 0;
// 1. depth+, makeNext
// 2. check one
// 3. depth+, makeNext
// ...

if (num === 1) {
  console.log(count);
} else if (num === 2) {
  count++;
  console.log(count);
} else {
  count++;
  checkOne(makeNext([num]));
}

function makeNext(prev) {
  const next = [];
  // console.log('prev', count, prev);

  for (let i = 0; i < prev.length; i++) {
    if (!(prev[i] % 3)) {
      next.push(prev[i] / 3);
    }
    if (!(prev[i] % 2)) {
      next.push(prev[i] / 2);
    }
    if (prev[i] > 1) {
      next.push(prev[i] - 1);
    }
  }

  return next;
}

function checkOne(next) {
  // console.log('next', count, next);
  for (let i = 0; i < next.length; i++) {
    if (next[i] === 1) {
      return console.log(count);
    }
  }

  count++;
  checkOne(makeNext(next));
}
