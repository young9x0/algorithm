//최대공약수와 최대공배수
//최대공약수, greatest common factors, GCF
//최대공배수, Least Common Multiple, LCM
const question = '24 18'; //24 = 2³ * 3  , 18 = 2* 3²
//6
//72
//2³ * 3²
const fs = require('fs');
const input = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin', 'utf8').toString() : question).split('\n');

const factors = [],
  [fir, sec] = input[0].split(' ');

input[0].split(' ').map((num, idx) => {
  factors[idx] = [];
  for (let i = 1; i <= num; i++) {
    num % i === 0 && factors[idx].push(i);
  }
});
// console.log("factors", factors);
let largeFactorIdx = 0,
  GCF = '';
if (factors[0].length < factors[1].length) {
  largeFactorIdx = 1;
}
factors[largeFactorIdx].map((el, idx) => {
  factors[!largeFactorIdx ? 1 : 0].map((other) => {
    if (el === other) GCF = el;
  });
});
// console.log("GCF", GCF);
console.log(GCF + '\n' + (fir * sec) / GCF);
