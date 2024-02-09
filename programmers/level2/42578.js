//https://school.programmers.co.kr/learn/courses/30/lessons/42578
//의상

function solution(clothes) {
  let answer = 0;

  const clean = clothes.reduce((acc, cur) => {
    if (!acc[cur[1]]) {
      acc[cur[1]] = 1;
      return acc;
    }
    acc[cur[1]]++;
    return acc;
  }, {});

  const cValue = Object.values(clean);
  answer = cValue.reduce((acc, cur) => acc * cur, 1);
  if (cValue.length > 1) {
    answer += cValue.reduce((acc, cur) => acc + cur, 0);
  }

  return answer;
}

console.log(
  solution([
    ['yellow_hat', 'headgear'],
    ['blue_sunglasses', 'eyewear'],
    ['green_turban', 'headgear'],
  ]),
); //5
console.log(
  solution([
    ['crow_mask', 'face'],
    ['blue_sunglasses', 'face'],
    ['smoky_makeup', 'face'],
  ]),
); //3
