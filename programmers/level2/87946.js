//https://school.programmers.co.kr/learn/courses/30/lessons/87946
//피로도


function solution(k, dungeons) {
  let answer = -1;
  const origin = [1, 2, 3, 4,5];

  function recursive(result, remain) {
    // console.log('result', result);
    // console.log('remain', remain);

    if (result.length === origin.length ) {
      console.log('----result', result);
      return;
    }

    for (let i = 0; i < remain.length; i++) {
      const newResult = [...result, remain[i]]
      const rest = remain.filter((_, idx) => idx !== i);
      recursive(newResult, [...rest]);
    }
  }

  for (let i = 0; i < origin.length; i++) {
    const temp = [origin[i]];
    const rest = origin.filter((_, idx) => idx !== i);
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
