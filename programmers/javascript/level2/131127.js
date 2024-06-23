// https://school.programmers.co.kr/learn/courses/30/lessons/131127
// 할인 행사
function solution(want, number, discount) {
  const wList = want.reduce((acc, cur, idx) => {
    acc[cur] = number[idx];
    return acc;
  }, {});
  // console.log(list)

  const total = (res) => Object.values(res).reduce((acc, cur) => acc + cur, 0);
  let answer = 0;
  // console.log('answer', answer);

  const dLen = discount.length;
  for (let i = 0; i < dLen; i++) {
    // console.log('i', i);
    const last = i + 10 > dLen ? dLen : i + 10;
    const list = { ...wList };
    for (let j = i; j < last; j++) {
      // console.log('discount[j]', discount[j]);
      if (list[discount[j]] > 0) {
        list[discount[j]] -= 1;
      }
    }
    const temp = total(list);
    // console.log('temp', temp);
    if (temp === 0) {
      answer += 1;
    }
  }
  return answer;
}

// console.log(
//   solution(
//     ['banana', 'apple', 'rice', 'pork', 'pot'],
//     [3, 2, 2, 2, 1],
//     [
//       'chicken',
//       'apple',
//       'apple',
//       'banana',
//       'rice',
//       'apple',
//       'pork',
//       'banana',
//       'pork',
//       'rice',
//       'pot',
//       'banana',
//       'apple',
//       'banana',
//     ],
//   ),
// ); //3
console.log(
  solution(
    ['apple'],
    [10],
    ['banana', 'banana', 'banana', 'banana', 'banana', 'banana', 'banana', 'banana', 'banana', 'banana'],
  ),
); //10
