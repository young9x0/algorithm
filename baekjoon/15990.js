//1, 2, 3 더하기 5

const question = `3
4
7
10`;
// 3
// 9
// 27

const fs = require('fs');
const input = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin', 'utf8').trim() : question).split('\n');
const result = [];

input.map((N, idx) => {
  if (idx > 0) {
    const num = Number(N);
    result.push(makeAddFactors(num) % 1000000009);
  }
});

// makeAddFactors(7);
function makeAddFactors(num) {
  const checkCount = { count: 0 };
  let history = { sum: 0, prev: 0 };
  // console.log('------------input num', num);
  for (let i = 1; i < 4; i++) {
    if (num === i) {
      checkCount.count += 1;
    } else {
      history.prev = i;
      history.sum = i;
      checkPrev(num, checkCount, history);
      // console.log('input result', checkCount.count);
    }
  }

  return checkCount.count;
}

function checkPrev(num, checkCount, history) {
  // console.log('count', checkCount.count);
  // console.log('sum', history.sum);
  for (let i = 1; i < 4; i++) {
    if (history.prev !== i) {
      // console.log('i', i);

      if (history.sum !== num) {
        if (num - history.sum > i) {
          // console.log('again------------------');

          checkPrev(num, checkCount, { sum: history.sum + i, prev: i });
        } else if (num - history.sum === i) {
          // console.log('final', history);

          checkCount.count++;
        }
      }
    }
  }
}

console.log(result.join('\n'));
