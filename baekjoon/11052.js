//카드 구매하기

// const question = `4
// 1 5 6 7`; //10
// const question = `5
// 10 9 8 7 6`; //50
// const question = `10
// 1 1 2 3 5 8 13 21 34 55`; //55
// const question = `10
// 5 10 11 12 13 30 35 40 45 47`; //50
// const question = `4
// 5 2 8 10`; //20
const question = `4
3 5 15 16`; //18

const fs = require('fs');
const input = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin', 'utf8').toString().trim() : question).split(
  '\n',
);
let pList = { 0: 0 },
  wanted = Number(input[0]),
  pRes = 0;
const splited = input[1].split(' ');

for (let i = 1; i < wanted + 1; i++) {
  pList[i] = Number(splited[i - 1]);
}
// console.log('pList', pList);
for (let i = 1; i < wanted + 1; i++) {
  let cardLen = wanted;
  while (i * cardLen > wanted) {
    cardLen--;
  }
  // console.log('cardLen', cardLen);
  let count = cardLen,
    temp = pList[count];
  while (count > 0) {
    if (wanted !== count * i) {
      temp = pList[i] * count + pList[wanted - count * i];
      // console.log(i, '카드가', count, '개', '나머지 카드', wanted - count * i, '총액은', temp);
    }
    pRes < temp && (pRes = temp);
    count--;
  }
}

console.log(pRes);
