//https://school.programmers.co.kr/learn/courses/30/lessons/87946
//피로도

function solution(k, dungeons) {
  let answer = -1;

  function recursive(result, remain) {
    // console.log('result', result);
    // console.log('remain', remain);

    if (result.length === dungeons.length) {
      // console.log('----result', result);
      let power = k;
      const count = result.reduce((acc, cur) => {
        if (power >= cur[0]) {
          power -= cur[1];
          acc++;
        }
        // console.log('acc', acc);
        return acc;
      }, 0);

      answer = Math.max(answer, count);
      return;
    }

    for (let i = 0; i < remain.length; i++) {
      const rCopy = Array.from(result, ([a, b]) => [a, b]);
      const newResult = [...rCopy, [remain[i][0], remain[i][1]]];
      const rest = remain.filter((_, idx) => idx !== i);
      recursive(newResult, [...rest]);
    }
  }

  for (let i = 0; i < dungeons.length; i++) {
    const dCopy = Array.from(dungeons, ([a, b]) => [a, b]);
    const temp = [[dCopy[i][0], dCopy[i][1]]];
    const rest = dCopy.filter((_, idx) => idx !== i);
    recursive(temp, [...rest]);
  }

  return answer;
}

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ]),
); //3
