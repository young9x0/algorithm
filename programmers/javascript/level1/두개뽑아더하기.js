function solution(n) {
  let a = [];
  n.filter((v, j) => {
    for (let i = 0; i < n.length; i++) {
      if (i !== j) {
        a.push(v + n[i]);
      }
    }
  });

  return a.sort((g, h) => g - h).filter((c, x) => c !== a[x + 1]);
}
function solution(n) {
  let a = [];

  for (let i = 0; i < n.length; i++) {
    for (let j = i + 1; j < n.length; j++) {
      a.push(n[i] + n[j]);
    }
  }

  a = [...new Set(a)];
  console.log(a);
  return a.sort((g, h) => g - h);
}
function solution(n) {
  let a = [];

  for (let i = 0; i < n.length - 1; i++) {
    for (let j = i + 1; j < n.length; j++) {
      if (a.indexOf(n[i] + n[j] === -1)) a.push(n[i] + n[j]);
      //중복된 값이 없으면 push하기
    }
  }
}
console.log(solution([5, 0, 2, 7]));
