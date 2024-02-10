//https://school.programmers.co.kr/learn/courses/30/lessons/138476
//귤 고르기
//해답: https://velog.io/@sisofiy626/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EA%B7%A4-%EA%B3%A0%EB%A5%B4%EA%B8%B0-JavaScript
function solution(k, tangerine) {
  const tChecked = tangerine.reduce((acc, cur) => {
    if (!acc[cur]) {
      acc[cur] = 1;
    } else {
      acc[cur] += 1;
    }
    return acc;
  }, {});

  const tValue = Object.values(tChecked).sort((a, b) => b - a);
  // console.log('tValue', tValue);

  let count = 0;
  for (const value of tValue) {
    // console.log('count', count)
    if (k <= 0) {
      return count;
    }

    count++;
    k -= value;
  }
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3])); //3
// console.log(solution(4, [1, 3, 2, 5, 4, 5, 2, 3])); //2
// console.log(solution(2, [1, 1, 1, 1, 2, 2, 2, 3])); //1
