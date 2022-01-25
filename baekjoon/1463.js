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
let prev = [num],
  next = [];
let count = 0;
// 1. depth+, makeNext
// 2. check one
// 3. depth+, makeNext
// ...

if (next.length === 0) {
  count++;
  checkOne(makeNext(prev, next));
}

function makeNext(prev, next) {
  // console.log('prev', count, prev);
  prev.map((num) => {
    if (!(num % 3)) {
      next.push(num / 3);
    }
    if (!(num % 2)) {
      next.push(num / 2);
    }

    if (num > 1) {
      next.push(num - 1);
    }
  });

  return next;
}

function checkOne(next) {
  // console.log('next', count, next);
  const filterOne = next.filter((res) => res === 1);
  if (filterOne.length) {
    return console.log(count);
  } else {
    count++;
    prev = next;
    next = [];
    checkOne(makeNext(prev, next));
  }
}
