//https://www.codingame.com/ide/puzzle/there-is-no-spoon-episode-1

const width = 4; // the number of cells on the X axis
const height = 4; // the number of cells on the Y axis
let cell = [];
let answer = '';
let power = { x: '', y: '' }; //현재 파워 노드 좌표
let right = { x: '', y: '' }; //현재 파워 노드의 오른쪽 파워 노드 좌표
let lower = { x: '', y: '' }; //현재 파워 노드의 아래쪽 파워 노드 좌표
// for (let i = 0; i < height; i++) {
//   const line = readline(); // width characters, each either 0 or .
// cell.push(line.split(''));

// }

cell = [
  ['0', '.', '.', '.'],
  ['.', '0', '.', '.'],
  ['.', '.', '0', '.'],
  ['.', '.', '.', '0'],
];
function find_right_power_node(power_x, power_y) {
  if (power_x + 1 < width) {
    for (let r = 0; r < width; r++) {
      if (power_x < r && cell[power_y][r] === '0') {
        return (right = { x: r, y: power_y });
      } else {
        right = { x: '-1', y: '-1' };
      }
    }
  } else {
    right = { x: '-1', y: '-1' };
  }
}
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
      power.x = x;
      power.y = y;
      find_right_power_node(power.x, power.y);
      find_lower_power_node(power.x, power.y);

      answer += power.x + ' ' + power.y + ' ' + right.x + ' ' + right.y + ' ' + lower.x + ' ' + lower.y + '\n';
    }
  }
}
console.log(answer);
