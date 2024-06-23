// https://school.programmers.co.kr/learn/courses/30/lessons/42587
// 프로세스
//해답: https://velog.io/@cyd5538/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4JS

function solution(priorities, location) {
  let answer = 0;
  const list = priorities.map((process, idx) => ({ process, idx }));

  while (list.length) {
    const queue = list.shift();
    // console.log('queue', queue);
    if (list.some((el) => el.process > queue.process)) {
      list.push(queue);
      // console.log('list', list);
    } else {
      answer++;
      // console.log('answer', answer);
      if (queue.idx === location) break;
    }
  }

  return answer;
}

// console.log(solution([2, 1, 3, 2], 2)); //1
console.log(solution([1, 1, 9, 1, 1, 1]		, 0))//5
