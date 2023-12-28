//https://school.programmers.co.kr/learn/courses/30/lessons/148652
//유사 칸토어 비트열
function solution(n, l, r) {
  let answer = 0;
  let cantor = '1';
  for (let i = 0; i < n; i++) {
    const temp = [...cantor].reduce((acc, cur, idx) => {
      if (cur === '0') {
        acc[idx] = '00000';
      }
      if (cur === '1') {
        acc[idx] = '11011';
      }

      return acc;
    }, []);
    // console.log('temp', temp);
    cantor = temp.join('');
  }

  // console.log('cantor', [...cantor]);
  answer = [...cantor].reduce((acc, cur, idx) => {
    if (idx < l - 1 || idx > r) {
      return acc;
    }

    if (cur === '1') {
      return (acc += 1);
    }

    return acc;
  }, 0);

  return answer;
}
console.log(solution(2, 4, 17)); //8
