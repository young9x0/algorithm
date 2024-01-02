//https://school.programmers.co.kr/learn/courses/30/lessons/12902
//3 x n 타일링
//해법: https://dev-note-97.tistory.com/182, https://velog.io/@longroadhome/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-LV.4-3-x-n-%ED%83%80%EC%9D%BC%EB%A7%81-JS
// dynamic programming: DP, 즉 다이나믹 프로그래밍(또는 동적 계획법)은 기본적인 아이디어로 하나의 큰 문제를 여러 개의 작은 문제로 나누어서 그 결과를 저장하여 다시 큰 문제를 해결할 때 사용하는 것으로 특정한 알고리즘이 아닌 하나의 문제해결 패러다임으로 볼 수 있다.
// https://hongjw1938.tistory.com/47

function solution(n) {

  if (n < 2 || n % 2 === 1) {
    return 0
  }
  if (n === 2) {
    return 3
  }
  if (n === 4) {
    return 11
  }

  const index = n / 2
  const dp = Array(index + 1).fill(0)
  dp[1] = 3 //n=2일 때 경우의 수 3가지를 (A,B,C)라고 하자.
  dp[2] = 11 //경우의 수 3가지를 (A,B,C)라고 하자.
  // console.log('dp', dp)
  const mod = 1_000_000_007
  // dp[n] = dp[n-2]*3 + dp[n-4]*2 + dp[n-6]*2 + ... + dp[2]*2 + 2
  // g(n) 이란 새로 생긴 모형 2가지
  // n=6인 경우 f(4)*3에서는 f(4)에서 새로 생긴 모형 D, E 뒤에 f(2)가 붙는 경우의 수만 계산했다. (DA, DB, DC, EA, EB, EC)
  // 따라서 f(2)가 D, E 앞에 오는 경우의 수를 더해 주어야 한다.  (AD, BD, CD, AE, BE, CE)
  for (let i = 3; i < index + 1; i++) {
    // console.log('i*2', i * 2)
    dp[i] += 3 * dp[i - 1] + 2
    for (let j = 1; j < i - 1; j++) {
      // console.log('j*2', j * 2)
      dp[i] += dp[j] * 2
    }
    dp[i] %= mod
    // console.log('-----dp', dp)
  }
  return dp[index]
}

// console.log(solution(2))//3
// console.log(solution(4))//11
// console.log(solution(6))//41
console.log(solution(8))//153
// console.log(solution(10))//
// console.log(solution(12))//
