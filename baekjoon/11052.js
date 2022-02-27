//카드 구매하기

// const question = `4
// 1 5 6 7`; //10
// const question = `5
// 10 9 8 7 6`; //50
// const question = `10
// 1 1 2 3 5 8 13 21 34 55`; //55
// const question = `10
// 5 10 11 12 13 30 35 40 45 47`; //50
const question = `4
5 2 8 10`; //20
// const question = `4
// 3 5 15 16`; //18

const fs = require('fs');
const input = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin', 'utf8').trim() : question).split('\n');
let result = 0,
  PList = { 0: 0 },
  wanted = Number(input[0]);

const splited = input[1].split(' ');

for (let i = 1; i < wanted + 1; i++) {
  PList[i] = Number(splited[i - 1]);
}

// console.log('PList', PList);
for (let i = 1; i < wanted + 1; i++) {
  // console.log('i', i, result);
  result = PList[1] * wanted;
  let max = checkDividedMax(i, wanted - i);
  //1, 3

  if (result < max) result = max;
}

function checkDividedMax(fixed, excepted) {
  // console.log('fixed', fixed, 'excepted', excepted);
  let next = 0,
    cur = PList[fixed] + PList[excepted];

  //1, 3
  //1, 2

  if (excepted > 2) next = PList[fixed] + checkDividedMax(excepted - 1, excepted - 2);

  //1, 2
  //1, 1
  // console.log('cur', cur);
  // console.log('next', next);
  if (cur < next) {
    cur = next;
  }

  return cur;
}

console.log(result);
