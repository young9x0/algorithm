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

function makeAddFactors(num) {
  let count = 0;
  // console.log('------------input num', num);
  for (let i = 1; i < 4; i++) {
    if (num === i) {
      count += 1;
    } else {
      const addFactors = [];

      count += checkPrev(num, [i], addFactors).length;
      // console.log('================count is', count);
    }
  }

  return count;
}

function checkPrev(num, temp, addFactors) {
  // console.log('temp', temp);
  const tempReduce = temp.reduce((acc, cur) => acc + cur, 0);
  // console.log('num-tempReduce', num - tempReduce);
  for (let i = 1; i < 4; i++) {
    if (temp[temp.length - 1] !== i) {
      // console.log('i', i);
      // console.log('reduce', tempReduce);
      if (tempReduce !== num)
        if (num - tempReduce > i) {
          // console.log('again------------------');

          checkPrev(num, temp.concat(i), addFactors);
        } else if (num - tempReduce === i) {
          // console.log('num === i', num - tempReduce === i);
          // console.log('temp final', temp.concat(i));
          temp.concat(i);
          addFactors.push(temp);
        }
    }
  }

  return addFactors;
}

console.log(result.join('\n'));
