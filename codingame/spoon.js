//https://www.codingame.com/ide/puzzle/there-is-no-spoon-episode-1

const width = parseInt(readline()); // the number of cells on the X axis
const height = parseInt(readline()); // the number of cells on the Y axis
let cell = [];

for (let i = 0; i < height; i++) {
  const line = readline(); // width characters, each either 0 or .
  cell.push(line.split('')); // cell배열에 각 행에 들어갈 문자열을 배열로 바꾸어 넣어준다
}

// 예를 들면 width, height, cell의 모양은 다음과 같다
const width = 4;
const height = 4;
cell = [
  ['0', '.', '.', '.'],
  ['.', '0', '.', '.'],
  ['.', '.', '0', '.'],
  ['.', '.', '.', '0'],
];

let answer = '';
let power = { x: '', y: '' }; //현재 파워 노드 좌표
let right = { x: '', y: '' }; //현재 파워 노드의 오른쪽 파워 노드 좌표
let lower = { x: '', y: '' }; //현재 파워 노드의 아래쪽 파워 노드 좌표

function find_right_power_node(power_x, power_y) {
  if (power_x + 1 < width) {
    //x축을 기준으로 현재 파워 노드의 오른쪽에 다음 노드가 있을 때
    for (let r = 0; r < width; r++) {
      if (power_x < r && cell[power_y][r] === '0') {
        //현재 파워 노드와 같은 y축에 있는 파워노드 중 가장 가까운 노드를 찾는다
        return (right = { x: r, y: power_y });
      } else {
        right = { x: '-1', y: '-1' };
      }
    }
  } else {
    right = { x: '-1', y: '-1' };
  }
}

//오른쪽 파워 노드를 찾는 원리는 같다. 기준 축을 x에서 y로 바꾸어 생각하면 된다.
function find_lower_power_node(power_x, power_y) {
  if (power_y + 1 < height) {
    for (let l = 0; l < height; l++) {
      if (power_y < l && cell[l][power_x] === '0') {
        return (lower = { x: power_x, y: l });
      } else {
        lower = { x: '-1', y: '-1' };
      }
    }
  } else {
    lower = { x: '-1', y: '-1' };
  }
}

for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    if (cell[y][x] === '0') {
      //현재 파워노드에서 오른쪽 파워 노드와 아래쪽 파워노드를 찾는다
      power.x = x;
      power.y = y;
      find_right_power_node(power.x, power.y);
      find_lower_power_node(power.x, power.y);

      answer += power.x + ' ' + power.y + ' ' + right.x + ' ' + right.y + ' ' + lower.x + ' ' + lower.y + '\n';
    }
  }
}
console.log(answer);

//시간 복잡도 = O(n³)
