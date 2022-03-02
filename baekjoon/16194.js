//카드 구매하기2

// const question = `4
// 1 5 6 7`; //4
// const question = `5
// 10 9 8 7 6`; //6
// const question = `10
// 1 1 2 3 5 8 13 21 34 55`; //5
// const question = `10
// 5 10 11 12 13 30 35 40 45 47`; //26
// const question = `4
// 5 2 8 10`; //4
const question = `4
3 5 15 16`; //10

const fs = require('fs');
const input = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin', 'utf8').toString().trim() : question).split(
  '\n',
);
const cardLen = Number(input[0]),
  splited = input[1].split(' ').map(Number);
let costMinLists = [0, ...splited];
// console.log(costMinLists);
for (let i = 2; i < cardLen + 1; i++) {
  for (let j = 1; j < i; j++) {
    // console.log(i, costMinLists[i], costMinLists[j], costMinLists[i - j]);
    costMinLists[i] = Math.min(costMinLists[i], costMinLists[j] + costMinLists[i - j]);
  }
}
// console.log(costMinLists);
console.log(costMinLists[cardLen]);
