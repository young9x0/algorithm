//https://school.programmers.co.kr/learn/courses/30/lessons/12914
//멀리 뛰기

function solution(n) {
  let answer = 0
const dp = [1,2]
  for (let i = 2; i < n; i++) {
    dp[i] = dp[i-1]+ dp[i-2]
  }

  return dp[n-1]%1234567
}

// console.log(solution(4))//5
console.log(solution(3))//3
