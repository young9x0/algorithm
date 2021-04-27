//https://www.codingame.com/ide/puzzle/temperatures
const n = 5;
const test = '-3, -2, -8, -2, -5';
const inputs = test.split(' ');

let min_t = 5527;

function abs(t) {
  if (t < 0) {
    return -t;
  } else {
    return t;
  }
}

if (n === 0) {
  min_t = 0;
}
for (let i = 0; i < n; i++) {
  const t = parseInt(inputs[i]); // a temperature expressed as an integer ranging from -273 to 5526

  if (abs(t) < abs(min_t)) {
    min_t = t;
  } else if (abs(t) === abs(min_t) && t > 0) {
    min_t = abs(t);
  }
}
console.log(min_t);
