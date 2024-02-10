//https://school.programmers.co.kr/learn/courses/30/lessons/138476
//귤 고르기

function solution(k, tangerine) {
  let answer = Number.MAX_SAFE_INTEGER;

  const tChecked = tangerine.reduce((acc, cur) => {
    if (!acc[cur]) {
      acc[cur] = 1;
    } else {
      acc[cur] += 1;
    }
    return acc;
  }, {});
  // console.log('tChecked', tChecked);
  const tValue = Object.values(tChecked);
  const visited = Array(tValue.length).fill(0);

  function dfs(count) {
    // console.log('dfs-------');
    // console.log('count', count);

    if (count >= k) {
      // console.log('visited', visited);
      const sum = visited.reduce((acc, cur) => acc + cur, 0);
      // console.log('sum', sum);
      // console.log('==answer', answer);

      return (answer = Math.min(answer, sum));
    }

    tValue.forEach((num, idx) => {
      let cnt = count
      // console.log('idx', idx);
      // console.log('num', num);

      if(num >= k){
        return answer =1
      }

      if (cnt + num <= k && !visited[idx]) {
        cnt += num;
        visited[idx] = 1;
        dfs(cnt);
        visited[idx] = 0;
      }
    });
  }

  dfs(0);
  return answer;
}

// console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3])); //3
// console.log(solution(4, [1, 3, 2, 5, 4, 5, 2, 3])); //2
console.log(solution(2, [1, 1, 1, 1, 2, 2, 2, 3])); //1
