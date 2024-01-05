//169198
//https://school.programmers.co.kr/learn/courses/30/lessons/169198
//당구 연습
function solution(m, n, startX, startY, balls) {
  let answer = [];
  balls.forEach(([targetX, targetY]) => {
    if (startX === targetX) {
      answer.push(Math.pow(Math.abs(targetY - startY), 2) + Math.pow(
          2 * Math.min(m - startX, startX), 2))
    } else if (startY === targetY) {
      answer.push(Math.pow(Math.abs(targetX - startX), 2) + Math.pow(
          2 * Math.min(n - startY, startY), 2))
    } else {
      answer.push(
          Math.pow(Math.abs(targetX - startX), 2) + Math.pow(
              Math.abs(n - targetY) + Math.abs(n - startY),
              2))
    }
  })
  return answer;
}

console.log(solution(10, 10, 3, 7, [[7, 7], [2, 7], [7, 3]]))//[52, 37, 116]
