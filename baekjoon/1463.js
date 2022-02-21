//1로 만들기

// const question = `25`; //6
// const question = `2`; //1
const question = `10`; //3

const fs = require('fs');
const input = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin', 'utf8').toString().trim() : question).split(
  '\n',
);

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

  return next.filter((num) => num === 1).length > 0 ? console.log(count) : (count++, checkOne(makeNext(next)));
}
