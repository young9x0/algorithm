//https://school.programmers.co.kr/learn/courses/30/lessons/86971
// 전력망을 둘로 나누기
//해답: https://velog.io/@sean2337/Programmers-%EC%A0%84%EB%A0%A5%EB%A7%9D%EC%9D%84-%EB%91%98%EB%A1%9C-%EB%82%98%EB%88%84%EA%B8%B0-JavaScript
function solution(n, wires) {
  let answer = Number.MAX_SAFE_INTEGER;
  //console.log('answer', answer);//9007199254740991
  let tree = Array.from(Array(n + 1), () => []);
  wires.map((wire) => {
    let [a, b] = wire;
    tree[a].push(b);
    tree[b].push(a);
  });

  //  console.log('tree', tree);// [ [], [ 2 ], [ 1, 3 ], [ 2, 4 ], [ 3 ] ]

  function searchTree(root, except) {
    let count = 0;
    let visit = [];
    let stack = [root];
    visit[root] = true;
    // console.log('-----root', root);
    // console.log('except', except);
    while (stack.length) {
      let idx = stack.pop();
      // console.log('idx', idx);
      tree[idx].forEach((node) => {
        // console.log('node', node);
        if (node !== except && !visit[node]) {
          visit[node] = true;
          stack.push(node);
          // console.log('stack', stack);
        }
      });
      count++;
    }
    // console.log('count', count);
    return count;
  }

  wires.forEach((wire) => {
    // console.log('wire-------');
    let [a, b] = wire;
    answer = Math.min(answer, Math.abs(searchTree(a, b) - searchTree(b, a)));
  });

  return answer;
}

console.log(
  solution(9, [
    [1, 3],
    [2, 3],
    [3, 4],
    [4, 5],
    [4, 6],
    [4, 7],
    [7, 8],
    [7, 9],
  ]),
); //3
// console.log(
//   solution(4, [
//     [1, 2],
//     [2, 3],
//     [3, 4],
//   ]),
// ); //0
// console.log(
//   solution(7, [
//     [1, 2],
//     [2, 7],
//     [3, 7],
//     [3, 4],
//     [4, 5],
//     [6, 7],
//   ]),
// ); //1
