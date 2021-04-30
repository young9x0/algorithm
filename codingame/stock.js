//https://www.codingame.com/ide/puzzle/stock-exchange-losses
//sol1
const n = 5;
const test = '1 2 4 4 5';
const inputs = test.split(' ');
let last = '';
let temp = '';
let max_loss = '';
let answer = '';
for (let i = 0; i < n; i++) {
  const v = parseInt(inputs[i]);
  last = inputs[n - i - 1];
  for (let j = i + 1; j < n; j++) {
    temp = inputs[n - j - 1];
    // console.log('last', last - temp);
    if (!max_loss) {
      max_loss = last - temp;
    }
    if (max_loss > last - temp) {
      max_loss = last - temp;
    }
  }
}
if (max_loss > 0) {
  answer = 0;
} else {
  answer = max_loss;
}
console.log(answer);

//sol2
const n = 6;
const test = '3 2 4 2 1 5';
const inputs = test.split(' ');
let highest_price = parseInt(inputs[0]);
let max_loss = 0;

for (let i = 0; i < n; i++) {
  const v = parseInt(inputs[i]);

  if (highest_price < v) {
    highest_price = v;
  }

  if (max_loss > v - highest_price) {
    max_loss = v - highest_price;
  }
}
console.log(max_loss);
