//https://school.programmers.co.kr/learn/courses/30/lessons/12914
//멀리 뛰기
//해답: https://velog.io/@longroadhome/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-LV.3-%EB%A9%80%EB%A6%AC-%EB%9B%B0%EA%B8%B0-JS
function solution(n) {
  const dp = [1, 2];
  for (let i = 2; i < n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
    // dp에 1234567로 나눈 값을 저장하지 않으면 Infinity가 저장될 때가 생김
    //https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Infinity
    console.log(dp[i]);
  }

  return dp[n - 1];
}

// console.log(solution(4))//5
// console.log(solution(3))//3
console.log(solution(2000)); //3
