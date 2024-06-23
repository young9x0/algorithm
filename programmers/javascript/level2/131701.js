// https://school.programmers.co.kr/learn/courses/30/lessons/131701
// 연속 부분 수열 합의 개수
//해답: https://velog.io/@cyd5538/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%97%B0%EC%86%8D-%EB%B6%80%EB%B6%84-%EC%88%98%EC%97%B4-%ED%95%A9%EC%9D%98-%EA%B0%9C%EC%88%98JS
function solution(elements) {
  const sumSet = new Set();
  const len = elements.length;

  for (let i = 0; i < len; i++) {
    let sum = 0;

    for (let j = i; j < i + len; j++) {
      sum += elements[j % len];
      // console.log('elements[j % len]', elements[j % len])
      sumSet.add(sum);
    }
    // console.log('sumSet',sumSet)
  }

  return sumSet.size;
}

console.log(solution([7, 9, 1, 1, 4])); //18

