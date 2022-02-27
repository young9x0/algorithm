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
  // console.log('i', i, 'result', result);
  result = PList[1] * wanted;
  let temp = checkDividedMax(i, wanted - i, 0);
  //1,4
  if (result < temp) result = temp;
}

function checkDividedMax(fixed, excepted, acc) {
  // console.log('fixed', fixed, 'excepted', excepted, 'acc', acc);

  let next = 0,
    cur = acc + makeSum(fixed, excepted);
  //1 4 = 10 7=17
  //1 3 1= 10 8 10 = 28

  if (excepted > 2) {
    next = acc + PList[fixed] + makeSum(excepted - 1, 1);
    //1 3 1=10 8 10 = 28
  } else {
    next = acc + PList[fixed] + PList[1] * excepted;
    // 10 40=50
  }

  // console.log('cur', cur);
  // console.log('next', next);
  if (cur < next) {
    if (excepted > 2) {
      checkDividedMax(excepted - 1, 1, PList[fixed]);
    }
    cur = next;
  }
  return cur;
}

function makeSum(fixed, excepted) {
  return PList[fixed] + PList[excepted];
}

console.log(result);
