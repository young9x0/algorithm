//https://www.codingame.com/ide/puzzle/chuck-norris
const MESSAGE = 'C';
let binary = '';

for (single_msg of MESSAGE) {
  const num = single_msg.charCodeAt(0);

  binary += num.toString(2);
}
if (binary.length < 7) {
  binary = '0' + binary;
}

let answer = '';
let prev = '';

for (bit of binary) {
  console.log(bit === prev);
  if (prev !== bit) {
    if (bit === '1') {
      answer += ' 0 ';
    } else {
      answer += ' 00 ';
    }
  }
  answer += '0';
  prev = bit;
}
console.log(answer.slice(1));
// let answer = '';
// let arr = binary.split('');
// let fir = '0';
// let sec = '0';
// arr.map((n, i) => {
//   if (n === arr[i + 1]) {
//     //반복될 때
//     sec += '0';
//   } else {
//     //반복 안 될 때
//     if (n === '0') {
//       fir = '00';
//     }
//     answer += fir + ' ' + sec + ' ';
//     fir = '0';
//     sec = '0';
//   }
// });
// console.log(answer.slice(0, -1));
