//https://school.programmers.co.kr/learn/courses/30/lessons/12953
//N개의 최소공배수
//해법: https://onlydev.tistory.com/55

function gcd(a, b) {
  // console.log('gcd',a,b)
  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
}

function solution(arr) {
  let answer = arr[0];

  const lcm = (a, b) => {
    answer = (a * b) / gcd(a, b);
  };

  for (let i = 1; i < arr.length; i++) {
    lcm(answer, arr[i]);
  }

  return answer;
}

console.log(solution([2, 6, 8, 14])); //168
// console.log(solution([1, 2, 3])); //6
