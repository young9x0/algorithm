//https://school.programmers.co.kr/learn/courses/30/lessons/87946
//피로도

function solution(k, dungeons) {
  let answer = -1;
  const visited = new Array(dungeons.length).fill(0);
  function dfs(k, cnt) {
    console.log('dfs---');
    console.log('k', k);
    console.log('cnt', cnt);

    answer = Math.max(cnt, answer);

    for (let i = 0; i < dungeons.length; i++) {
      console.log('===i', i);
      console.log('visited', visited);
      console.log('dungeons[i]', dungeons[i]);
      if (k >= dungeons[i][0] && !visited[i]) {
        visited[i] = 1;
        console.log('go!');
        let power = cnt + 1;
        console.log('power', power);
        // cnt+1: for 반복문과 상관없이 고정된 값이 dfs 함수의 매개변수로 넘어간다
        // cnt++: for 반복문이 한바퀴 돌고나서 cnt값이 1 증가
        // ++cnt:for 반복문을 기준으로 값이 증가한 후 한바퀴를 돈다
        dfs(k - dungeons[i][1], power);
        console.log('---');
        visited[i] = 0;
      }
      console.log('pass!');
    }
  }

  dfs(k, 0);
  return answer;
}

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ]),
); //3
