function solution(s) {
  let a = s.toString(3).split('');
  let b = [...a];
  for (let i = 0; i < a.length; i++) {
    b[a.length - 1 - i] = a[i];
  }
  return parseInt(b.join(''), 3);
}
const solution = (s) => {
  return parseInt([...s.toString(3)].reverse().join(''), 3);
};
const solution = (n) => {
  const arr = [];
  while (n !== 0) {
    arr.unshift(n % 3);
    n = Math.floor(n / 3);
  }
  console.log(arr);
  return arr.reduce((acc, v, i) => {
    console.log(v * Math.pow(3, i));
    return acc + v * Math.pow(3, i);
  }, 0);
};
console.log(solution(45));
