function solution(n) {
  let answer = [];
  let a = [1, 2, 3, 4, 5],
    a1 = 0;
  let b = [2, 1, 2, 3, 2, 4, 2, 5],
    b1 = 0;
  let c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
    c1 = 0;

  for (let i in n) {
    console.log([i % b.length]);
    if (n[i] === a[i % a.length]) a1++;
    if (n[i] === b[i % b.length]) b1++;
    if (n[i] === c[i % c.length]) c1++;
  }
  let max = Math.max(a1, b1, c1);
  if (max === a1) answer.push(1);
  if (max === b1) answer.push(2);
  if (max === c1) answer.push(3);
  return answer;
}

console.log(solution([1, 3, 2, 4, 2, 1, 3, 2, 4, 2]));
