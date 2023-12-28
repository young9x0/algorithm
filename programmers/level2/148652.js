//https://school.programmers.co.kr/learn/courses/30/lessons/148652
//유사 칸토어 비트열
//해설: https://velog.io/@sean2337/Programmers-%EC%9C%A0%EC%82%AC-%EC%B9%B8%ED%86%A0%EC%96%B4-%EB%B9%84%ED%8A%B8%EC%97%B4-JavaScript
function check(num) {
  // 5이하로 떨어졌을 때 11011이기 => 2만 제외하고 true 리턴
  if (num < 5 && num != 2) return true;
  // 5개 중에 2번째 값은 0이기 때문에 false 리턴
  if ((num - 2) % 5 === 0) return false;

  //만약 5를 넘고, 2번째 값이 아니라면 5를 나눠서 진행
  return check(Math.floor(num / 5));
}

function solution(n, l, r) {
  var answer = 0;
  for (var i = l - 1; i < r; i++) {
    if (check(i)) {
      answer++;
    }
  }
  return answer;
}
console.log(solution(3, 4, 17)); //8
