//https://school.programmers.co.kr/learn/courses/30/lessons/12952
//N-Queen

//해법: https://han-joon-hyeok.github.io/posts/programmers-n-queen/, https://tear94fall.github.io/lecture/2020/09/16/n-queen-problem.html
function solution(n) {
  let answer = 0;
  const NOT_VISITED = 10;
  const status = Array(n).fill(NOT_VISITED);
  const isPossible = (row) => {
    console.log('set queen at current column', status);
    // 과거 퀸의 위치와 가능 여부를 확인하고 싶은 좌표 위치 비교하기
    for (let idx = 0; idx < row; idx++) {
      //이미 퀸이 놓여 있는 행의 좌표
      console.log('before coordinate = (idx, status[idx]):', '(', idx, ', ', status[idx], ')');
      //가능 여부를 확인하고 싶은 좌표의 위치
      console.log('target coordinate = (row, status[row]):', '(', row, ', ', status[row], ')');

      console.log('is same column?');
      //같은 열에 있는지 확인하기
      if (status[row] === status[idx]) {
        console.log('yes');
        return false;
      }

      console.log('is diagonal?');
      //검사하고자 하는 좌표 (row, col)가 기존에 방문된 좌표에서
      // y축(열을 기준으로 거리차, row - idx)
      // x축(= 행을 기준으로 거리차)
      // status[row] : 바로 전 줄(row-1) 좌표의 행 위치
      // status[idx] : 가능 여부를 확인하고 싶은 좌표의 행 위치
      // Math.abs(status[row] - status[idx]))
      // 으로 얼마나 떨어져 있는지로 기울기를 구하여 해당 좌표가 대각선 상에 있는지 확인하기
      if (Math.abs(status[row] - status[idx]) === row - idx) {
        console.log('yes');
        return false;
      }

      console.log("need check next queen's coordinate!");
    }
    return true;
  };

  //depth first search
  const dfs = (row) => {
    // const dfs = (status, row) => {
    //row번째 줄 검사하기
    // console.log('---dfs status', status);
    console.log('---dfs current row:', row);
    if (row === n) {
      console.log('last row');
      //n-1행까지 퀸이 모두 채워졌다면 가능한 경우의 수 하나 추가 후 종료하기
      answer++;
      return;
    }

    //row번째 줄의 모든 요소 검사하기
    for (let col = 0; col < n; col++) {
      //(row, col) 좌표에 퀸을 놓아보기
      console.log("current queen's coordinate", row, col);
      status[row] = col;
      if (isPossible(row)) {
        console.log('possible, go to next row');
        //가능하다면 다음 줄 검사 시작하기
        dfs(row + 1);
      }
    }
  };

  dfs(0);
  // dfs(status, 0);
  return answer;
}

console.log(solution(4)); //2

//  node 12952.js
// ---dfs current row: 0
// current queen's coordinate 0 0
// set queen at current column [ 0, 10, 10, 10 ]
// possible, go to next row
// ---dfs current row: 1
// current queen's coordinate 1 0
// set queen at current column [ 0, 0, 10, 10 ]
// before coordinate = (idx, status[idx]): ( 0 ,  0 )
// target coordinate = (row, status[row]): ( 1 ,  0 )
// is same column?
//   yes
//   current queen's coordinate 1 1
// set queen at current column [ 0, 1, 10, 10 ]
// before coordinate = (idx, status[idx]): ( 0 ,  0 )
// target coordinate = (row, status[row]): ( 1 ,  1 )
// is same column?
//   is diagonal?
//     yes
//     current queen's coordinate 1 2
// set queen at current column [ 0, 2, 10, 10 ]
// before coordinate = (idx, status[idx]): ( 0 ,  0 )
// target coordinate = (row, status[row]): ( 1 ,  2 )
// is same column?
//   is diagonal?
//     need check next queen's coordinate!
// possible, go to next row
// ---dfs current row: 2
// current queen's coordinate 2 0
// set queen at current column [ 0, 2, 0, 10 ]
// before coordinate = (idx, status[idx]): ( 0 ,  0 )
// target coordinate = (row, status[row]): ( 2 ,  0 )
// is same column?
//   yes
//   current queen's coordinate 2 1
// set queen at current column [ 0, 2, 1, 10 ]
// before coordinate = (idx, status[idx]): ( 0 ,  0 )
// target coordinate = (row, status[row]): ( 2 ,  1 )
// is same column?
//   is diagonal?
//     need check next queen's coordinate!
// before coordinate = (idx, status[idx]): ( 1 ,  2 )
// target coordinate = (row, status[row]): ( 2 ,  1 )
// is same column?
//   is diagonal?
//     yes
//     current queen's coordinate 2 2
// set queen at current column [ 0, 2, 2, 10 ]
// before coordinate = (idx, status[idx]): ( 0 ,  0 )
// target coordinate = (row, status[row]): ( 2 ,  2 )
// is same column?
//   is diagonal?
//     yes
//     current queen's coordinate 2 3
// set queen at current column [ 0, 2, 3, 10 ]
// before coordinate = (idx, status[idx]): ( 0 ,  0 )
// target coordinate = (row, status[row]): ( 2 ,  3 )
// is same column?
//   is diagonal?
//     need check next queen's coordinate!
// before coordinate = (idx, status[idx]): ( 1 ,  2 )
// target coordinate = (row, status[row]): ( 2 ,  3 )
// is same column?
//   is diagonal?
//     yes
//     current queen's coordinate 1 3
// set queen at current column [ 0, 3, 3, 10 ]
// before coordinate = (idx, status[idx]): ( 0 ,  0 )
// target coordinate = (row, status[row]): ( 1 ,  3 )
// is same column?
//   is diagonal?
//     need check next queen's coordinate!
// possible, go to next row
// ---dfs current row: 2
// current queen's coordinate 2 0
// set queen at current column [ 0, 3, 0, 10 ]
// before coordinate = (idx, status[idx]): ( 0 ,  0 )
// target coordinate = (row, status[row]): ( 2 ,  0 )
// is same column?
//   yes
//   current queen's coordinate 2 1
// set queen at current column [ 0, 3, 1, 10 ]
// before coordinate = (idx, status[idx]): ( 0 ,  0 )
// target coordinate = (row, status[row]): ( 2 ,  1 )
// is same column?
//   is diagonal?
//     need check next queen's coordinate!
// before coordinate = (idx, status[idx]): ( 1 ,  3 )
// target coordinate = (row, status[row]): ( 2 ,  1 )
// is same column?
//   is diagonal?
//     need check next queen's coordinate!
// possible, go to next row
// ---dfs current row: 3
// current queen's coordinate 3 0
// set queen at current column [ 0, 3, 1, 0 ]
// before coordinate = (idx, status[idx]): ( 0 ,  0 )
// target coordinate = (row, status[row]): ( 3 ,  0 )
// is same column?
//   yes
//   current queen's coordinate 3 1
// set queen at current column [ 0, 3, 1, 1 ]
// before coordinate = (idx, status[idx]): ( 0 ,  0 )
// target coordinate = (row, status[row]): ( 3 ,  1 )
// is same column?
//   is diagonal?
//     need check next queen's coordinate!
// before coordinate = (idx, status[idx]): ( 1 ,  3 )
// target coordinate = (row, status[row]): ( 3 ,  1 )
// is same column?
//   is diagonal?
//     yes
//     current queen's coordinate 3 2
// set queen at current column [ 0, 3, 1, 2 ]
// before coordinate = (idx, status[idx]): ( 0 ,  0 )
// target coordinate = (row, status[row]): ( 3 ,  2 )
// is same column?
//   is diagonal?
//     need check next queen's coordinate!
// before coordinate = (idx, status[idx]): ( 1 ,  3 )
// target coordinate = (row, status[row]): ( 3 ,  2 )
// is same column?
//   is diagonal?
//     need check next queen's coordinate!
// before coordinate = (idx, status[idx]): ( 2 ,  1 )
// target coordinate = (row, status[row]): ( 3 ,  2 )
// is same column?
//   is diagonal?
//     yes
//     current queen's coordinate 3 3
// set queen at current column [ 0, 3, 1, 3 ]
// before coordinate = (idx, status[idx]): ( 0 ,  0 )
// target coordinate = (row, status[row]): ( 3 ,  3 )
// is same column?
//   is diagonal?
//     yes
//     current queen's coordinate 2 2
// set queen at current column [ 0, 3, 2, 3 ]
// before coordinate = (idx, status[idx]): ( 0 ,  0 )
// target coordinate = (row, status[row]): ( 2 ,  2 )
// is same column?
//   is diagonal?
//     yes
//     current queen's coordinate 2 3
// set queen at current column [ 0, 3, 3, 3 ]
// before coordinate = (idx, status[idx]): ( 0 ,  0 )
// target coordinate = (row, status[row]): ( 2 ,  3 )
// is same column?
//   is diagonal?
//     need check next queen's coordinate!
// before coordinate = (idx, status[idx]): ( 1 ,  3 )
// target coordinate = (row, status[row]): ( 2 ,  3 )
// is same column?
//   yes
//   current queen's coordinate 0 1
// set queen at current column [ 1, 3, 3, 3 ]
// possible, go to next row
// ---dfs current row: 1
// current queen's coordinate 1 0
// set queen at current column [ 1, 0, 3, 3 ]
// before coordinate = (idx, status[idx]): ( 0 ,  1 )
// target coordinate = (row, status[row]): ( 1 ,  0 )
// is same column?
//   is diagonal?
//     yes
//     current queen's coordinate 1 1
// set queen at current column [ 1, 1, 3, 3 ]
// before coordinate = (idx, status[idx]): ( 0 ,  1 )
// target coordinate = (row, status[row]): ( 1 ,  1 )
// is same column?
//   yes
//   current queen's coordinate 1 2
// set queen at current column [ 1, 2, 3, 3 ]
// before coordinate = (idx, status[idx]): ( 0 ,  1 )
// target coordinate = (row, status[row]): ( 1 ,  2 )
// is same column?
//   is diagonal?
//     yes
//     current queen's coordinate 1 3
// set queen at current column [ 1, 3, 3, 3 ]
// before coordinate = (idx, status[idx]): ( 0 ,  1 )
// target coordinate = (row, status[row]): ( 1 ,  3 )
// is same column?
//   is diagonal?
//     need check next queen's coordinate!
// possible, go to next row
// ---dfs current row: 2
// current queen's coordinate 2 0
// set queen at current column [ 1, 3, 0, 3 ]
// before coordinate = (idx, status[idx]): ( 0 ,  1 )
// target coordinate = (row, status[row]): ( 2 ,  0 )
// is same column?
//   is diagonal?
//     need check next queen's coordinate!
// before coordinate = (idx, status[idx]): ( 1 ,  3 )
// target coordinate = (row, status[row]): ( 2 ,  0 )
// is same column?
//   is diagonal?
//     need check next queen's coordinate!
// possible, go to next row
// ---dfs current row: 3
// current queen's coordinate 3 0
// set queen at current column [ 1, 3, 0, 0 ]
// before coordinate = (idx, status[idx]): ( 0 ,  1 )
// target coordinate = (row, status[row]): ( 3 ,  0 )
// is same column?
//   is diagonal?
//     need check next queen's coordinate!
// before coordinate = (idx, status[idx]): ( 1 ,  3 )
// target coordinate = (row, status[row]): ( 3 ,  0 )
// is same column?
//   is diagonal?
//     need check next queen's coordinate!
// before coordinate = (idx, status[idx]): ( 2 ,  0 )
// target coordinate = (row, status[row]): ( 3 ,  0 )
// is same column?
//   yes
//   current queen's coordinate 3 1
// set queen at current column [ 1, 3, 0, 1 ]
// before coordinate = (idx, status[idx]): ( 0 ,  1 )
// target coordinate = (row, status[row]): ( 3 ,  1 )
// is same column?
//   yes
//   current queen's coordinate 3 2
// set queen at current column [ 1, 3, 0, 2 ]
// before coordinate = (idx, status[idx]): ( 0 ,  1 )
// target coordinate = (row, status[row]): ( 3 ,  2 )
// is same column?
//   is diagonal?
//     need check next queen's coordinate!
// before coordinate = (idx, status[idx]): ( 1 ,  3 )
// target coordinate = (row, status[row]): ( 3 ,  2 )
// is same column?
//   is diagonal?
//     need check next queen's coordinate!
// before coordinate = (idx, status[idx]): ( 2 ,  0 )
// target coordinate = (row, status[row]): ( 3 ,  2 )
// is same column?
//   is diagonal?
//     need check next queen's coordinate!
// possible, go to next row
// ---dfs current row: 4
// last row
// current queen's coordinate 3 3
// set queen at current column [ 1, 3, 0, 3 ]
// before coordinate = (idx, status[idx]): ( 0 ,  1 )
// target coordinate = (row, status[row]): ( 3 ,  3 )
// is same column?
//   is diagonal?
//     need check next queen's coordinate!
// before coordinate = (idx, status[idx]): ( 1 ,  3 )
// target coordinate = (row, status[row]): ( 3 ,  3 )
// is same column?
//   yes
//   current queen's coordinate 2 1
// set queen at current column [ 1, 3, 1, 3 ]
// before coordinate = (idx, status[idx]): ( 0 ,  1 )
// target coordinate = (row, status[row]): ( 2 ,  1 )
// is same column?
//   yes
//   current queen's coordinate 2 2
// set queen at current column [ 1, 3, 2, 3 ]
// before coordinate = (idx, status[idx]): ( 0 ,  1 )
// target coordinate = (row, status[row]): ( 2 ,  2 )
// is same column?
//   is diagonal?
//     need check next queen's coordinate!
// before coordinate = (idx, status[idx]): ( 1 ,  3 )
// target coordinate = (row, status[row]): ( 2 ,  2 )
// is same column?
//   is diagonal?
//     yes
//     current queen's coordinate 2 3
// set queen at current column [ 1, 3, 3, 3 ]
// before coordinate = (idx, status[idx]): ( 0 ,  1 )
// target coordinate = (row, status[row]): ( 2 ,  3 )
// is same column?
//   is diagonal?
//     yes
//     current queen's coordinate 0 2
// set queen at current column [ 2, 3, 3, 3 ]
// possible, go to next row
// ---dfs current row: 1
// current queen's coordinate 1 0
// set queen at current column [ 2, 0, 3, 3 ]
// before coordinate = (idx, status[idx]): ( 0 ,  2 )
// target coordinate = (row, status[row]): ( 1 ,  0 )
// is same column?
//   is diagonal?
//     need check next queen's coordinate!
// possible, go to next row
// ---dfs current row: 2
// current queen's coordinate 2 0
// set queen at current column [ 2, 0, 0, 3 ]
// before coordinate = (idx, status[idx]): ( 0 ,  2 )
// target coordinate = (row, status[row]): ( 2 ,  0 )
// is same column?
//   is diagonal?
//     yes
//     current queen's coordinate 2 1
// set queen at current column [ 2, 0, 1, 3 ]
// before coordinate = (idx, status[idx]): ( 0 ,  2 )
// target coordinate = (row, status[row]): ( 2 ,  1 )
// is same column?
//   is diagonal?
//     need check next queen's coordinate!
// before coordinate = (idx, status[idx]): ( 1 ,  0 )
// target coordinate = (row, status[row]): ( 2 ,  1 )
// is same column?
//   is diagonal?
//     yes
//     current queen's coordinate 2 2
// set queen at current column [ 2, 0, 2, 3 ]
// before coordinate = (idx, status[idx]): ( 0 ,  2 )
// target coordinate = (row, status[row]): ( 2 ,  2 )
// is same column?
//   yes
//   current queen's coordinate 2 3
// set queen at current column [ 2, 0, 3, 3 ]
// before coordinate = (idx, status[idx]): ( 0 ,  2 )
// target coordinate = (row, status[row]): ( 2 ,  3 )
// is same column?
//   is diagonal?
//     need check next queen's coordinate!
// before coordinate = (idx, status[idx]): ( 1 ,  0 )
// target coordinate = (row, status[row]): ( 2 ,  3 )
// is same column?
//   is diagonal?
//     need check next queen's coordinate!
// possible, go to next row
// ---dfs current row: 3
// current queen's coordinate 3 0
// set queen at current column [ 2, 0, 3, 0 ]
// before coordinate = (idx, status[idx]): ( 0 ,  2 )
// target coordinate = (row, status[row]): ( 3 ,  0 )
// is same column?
//   is diagonal?
//     need check next queen's coordinate!
// before coordinate = (idx, status[idx]): ( 1 ,  0 )
// target coordinate = (row, status[row]): ( 3 ,  0 )
// is same column?
//   yes
//   current queen's coordinate 3 1
// set queen at current column [ 2, 0, 3, 1 ]
// before coordinate = (idx, status[idx]): ( 0 ,  2 )
// target coordinate = (row, status[row]): ( 3 ,  1 )
// is same column?
//   is diagonal?
//     need check next queen's coordinate!
// before coordinate = (idx, status[idx]): ( 1 ,  0 )
// target coordinate = (row, status[row]): ( 3 ,  1 )
// is same column?
//   is diagonal?
//     need check next queen's coordinate!
// before coordinate = (idx, status[idx]): ( 2 ,  3 )
// target coordinate = (row, status[row]): ( 3 ,  1 )
// is same column?
//   is diagonal?
//     need check next queen's coordinate!
// possible, go to next row
// ---dfs current row: 4
// last row
// current queen's coordinate 3 2
// set queen at current column [ 2, 0, 3, 2 ]
// before coordinate = (idx, status[idx]): ( 0 ,  2 )
// target coordinate = (row, status[row]): ( 3 ,  2 )
// is same column?
//   yes
//   current queen's coordinate 3 3
// set queen at current column [ 2, 0, 3, 3 ]
// before coordinate = (idx, status[idx]): ( 0 ,  2 )
// target coordinate = (row, status[row]): ( 3 ,  3 )
// is same column?
//   is diagonal?
//     need check next queen's coordinate!
// before coordinate = (idx, status[idx]): ( 1 ,  0 )
// target coordinate = (row, status[row]): ( 3 ,  3 )
// is same column?
//   is diagonal?
//     need check next queen's coordinate!
// before coordinate = (idx, status[idx]): ( 2 ,  3 )
// target coordinate = (row, status[row]): ( 3 ,  3 )
// is same column?
//   yes
//   current queen's coordinate 1 1
// set queen at current column [ 2, 1, 3, 3 ]
// before coordinate = (idx, status[idx]): ( 0 ,  2 )
// target coordinate = (row, status[row]): ( 1 ,  1 )
// is same column?
//   is diagonal?
//     yes
//     current queen's coordinate 1 2
// set queen at current column [ 2, 2, 3, 3 ]
// before coordinate = (idx, status[idx]): ( 0 ,  2 )
// target coordinate = (row, status[row]): ( 1 ,  2 )
// is same column?
//   yes
//   current queen's coordinate 1 3
// set queen at current column [ 2, 3, 3, 3 ]
// before coordinate = (idx, status[idx]): ( 0 ,  2 )
// target coordinate = (row, status[row]): ( 1 ,  3 )
// is same column?
//   is diagonal?
//     yes
//     current queen's coordinate 0 3
// set queen at current column [ 3, 3, 3, 3 ]
// possible, go to next row
// ---dfs current row: 1
// current queen's coordinate 1 0
// set queen at current column [ 3, 0, 3, 3 ]
// before coordinate = (idx, status[idx]): ( 0 ,  3 )
// target coordinate = (row, status[row]): ( 1 ,  0 )
// is same column?
//   is diagonal?
//     need check next queen's coordinate!
// possible, go to next row
// ---dfs current row: 2
// current queen's coordinate 2 0
// set queen at current column [ 3, 0, 0, 3 ]
// before coordinate = (idx, status[idx]): ( 0 ,  3 )
// target coordinate = (row, status[row]): ( 2 ,  0 )
// is same column?
//   is diagonal?
//     need check next queen's coordinate!
// before coordinate = (idx, status[idx]): ( 1 ,  0 )
// target coordinate = (row, status[row]): ( 2 ,  0 )
// is same column?
//   yes
//   current queen's coordinate 2 1
// set queen at current column [ 3, 0, 1, 3 ]
// before coordinate = (idx, status[idx]): ( 0 ,  3 )
// target coordinate = (row, status[row]): ( 2 ,  1 )
// is same column?
//   is diagonal?
//     yes
//     current queen's coordinate 2 2
// set queen at current column [ 3, 0, 2, 3 ]
// before coordinate = (idx, status[idx]): ( 0 ,  3 )
// target coordinate = (row, status[row]): ( 2 ,  2 )
// is same column?
//   is diagonal?
//     need check next queen's coordinate!
// before coordinate = (idx, status[idx]): ( 1 ,  0 )
// target coordinate = (row, status[row]): ( 2 ,  2 )
// is same column?
//   is diagonal?
//     need check next queen's coordinate!
// possible, go to next row
// ---dfs current row: 3
// current queen's coordinate 3 0
// set queen at current column [ 3, 0, 2, 0 ]
// before coordinate = (idx, status[idx]): ( 0 ,  3 )
// target coordinate = (row, status[row]): ( 3 ,  0 )
// is same column?
//   is diagonal?
//     yes
//     current queen's coordinate 3 1
// set queen at current column [ 3, 0, 2, 1 ]
// before coordinate = (idx, status[idx]): ( 0 ,  3 )
// target coordinate = (row, status[row]): ( 3 ,  1 )
// is same column?
//   is diagonal?
//     need check next queen's coordinate!
// before coordinate = (idx, status[idx]): ( 1 ,  0 )
// target coordinate = (row, status[row]): ( 3 ,  1 )
// is same column?
//   is diagonal?
//     need check next queen's coordinate!
// before coordinate = (idx, status[idx]): ( 2 ,  2 )
// target coordinate = (row, status[row]): ( 3 ,  1 )
// is same column?
//   is diagonal?
//     yes
//     current queen's coordinate 3 2
// set queen at current column [ 3, 0, 2, 2 ]
// before coordinate = (idx, status[idx]): ( 0 ,  3 )
// target coordinate = (row, status[row]): ( 3 ,  2 )
// is same column?
//   is diagonal?
//     need check next queen's coordinate!
// before coordinate = (idx, status[idx]): ( 1 ,  0 )
// target coordinate = (row, status[row]): ( 3 ,  2 )
// is same column?
//   is diagonal?
//     yes
//     current queen's coordinate 3 3
// set queen at current column [ 3, 0, 2, 3 ]
// before coordinate = (idx, status[idx]): ( 0 ,  3 )
// target coordinate = (row, status[row]): ( 3 ,  3 )
// is same column?
//   yes
//   current queen's coordinate 2 3
// set queen at current column [ 3, 0, 3, 3 ]
// before coordinate = (idx, status[idx]): ( 0 ,  3 )
// target coordinate = (row, status[row]): ( 2 ,  3 )
// is same column?
//   yes
//   current queen's coordinate 1 1
// set queen at current column [ 3, 1, 3, 3 ]
// before coordinate = (idx, status[idx]): ( 0 ,  3 )
// target coordinate = (row, status[row]): ( 1 ,  1 )
// is same column?
//   is diagonal?
//     need check next queen's coordinate!
// possible, go to next row
// ---dfs current row: 2
// current queen's coordinate 2 0
// set queen at current column [ 3, 1, 0, 3 ]
// before coordinate = (idx, status[idx]): ( 0 ,  3 )
// target coordinate = (row, status[row]): ( 2 ,  0 )
// is same column?
//   is diagonal?
//     need check next queen's coordinate!
// before coordinate = (idx, status[idx]): ( 1 ,  1 )
// target coordinate = (row, status[row]): ( 2 ,  0 )
// is same column?
//   is diagonal?
//     yes
//     current queen's coordinate 2 1
// set queen at current column [ 3, 1, 1, 3 ]
// before coordinate = (idx, status[idx]): ( 0 ,  3 )
// target coordinate = (row, status[row]): ( 2 ,  1 )
// is same column?
//   is diagonal?
//     yes
//     current queen's coordinate 2 2
// set queen at current column [ 3, 1, 2, 3 ]
// before coordinate = (idx, status[idx]): ( 0 ,  3 )
// target coordinate = (row, status[row]): ( 2 ,  2 )
// is same column?
//   is diagonal?
//     need check next queen's coordinate!
// before coordinate = (idx, status[idx]): ( 1 ,  1 )
// target coordinate = (row, status[row]): ( 2 ,  2 )
// is same column?
//   is diagonal?
//     yes
//     current queen's coordinate 2 3
// set queen at current column [ 3, 1, 3, 3 ]
// before coordinate = (idx, status[idx]): ( 0 ,  3 )
// target coordinate = (row, status[row]): ( 2 ,  3 )
// is same column?
//   yes
//   current queen's coordinate 1 2
// set queen at current column [ 3, 2, 3, 3 ]
// before coordinate = (idx, status[idx]): ( 0 ,  3 )
// target coordinate = (row, status[row]): ( 1 ,  2 )
// is same column?
//   is diagonal?
//     yes
//     current queen's coordinate 1 3
// set queen at current column [ 3, 3, 3, 3 ]
// before coordinate = (idx, status[idx]): ( 0 ,  3 )
// target coordinate = (row, status[row]): ( 1 ,  3 )
// is same column?
//   yes
