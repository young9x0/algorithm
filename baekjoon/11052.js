//카드 구매하기

// const question = `4
// 1 5 6 7`; //10
// const question = `5
// 10 9 8 7 6`; //50
// const question = `10
// 1 1 2 3 5 8 13 21 34 55`; //55
const question = `10
5 10 11 12 13 30 35 40 45 47`; //50
// const question = `4
// 5 2 8 10`; //20
// const question = `4
// 3 5 15 16`; //18

const fs = require('fs');
const input = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin', 'utf8').toString().trim() : question).split(
  '\n',
);
const pList = [0],
  nList = [0],
  wanted = Number(input[0]),
  splited = input[1].split(' ');
let result = 0;

for (let i = 1; i < wanted + 1; i++) {
  pList.push(Number(splited[i - 1]));
  let cardLen = wanted;
  while (i * cardLen > wanted) {
    cardLen--;
  }
  // console.log('cardLen', cardLen);
  nList.push(cardLen);
}
// console.log('pList', pList);
// console.log('nList', nList);

for (let i = 1; i < wanted + 1; i++) {
  let temp = 0;
  if (wanted % i === 0 && wanted / i > 1) {
    temp = pList[i] * nList[i];
  } else {
    temp = pList[wanted - i] + pList[i];
  }
  // console.log('i', i);
  // console.log('temp', temp);
  // console.log('result', result);
  if (result < temp) {
    result = temp;
  }
}

console.log(result);
