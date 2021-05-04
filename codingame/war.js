//https://www.codingame.com/ide/puzzle/winamax-battle

// const n = parseInt(readline()); // the number of cards for player 1
let p1 = [],
  p2 = []; // the number of cards for player 1
// for (let i = 0; i < n; i++) {
//     const cardp1 = readline();
//      p1.push(cardp1);// the n cards of player 1
// }
// const m = parseInt(readline()); // the number of cards for player 2
// for (let i = 0; i < m; i++) {
//     const cardp2 = readline();
//      p2.push(cardp2); // the m cards of player 2
// }

const card = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const n = 3;
const cardp1 = 'AD KC QC';
const m = 3;
const cardp2 = 'KH QS JC';
// const n = 5;
// const cardp1 = '8C KD AH QH 2S';
// const m = 5;
// const cardp2 = '8D 2D 3H 4D 3S';

p1 = cardp1.split(' ');
p2 = cardp2.split(' ');
let count = 0;
let answer = '';
function battle(i, j, war) {
  //   console.log('battle', 'p1:', p1[i], 'p2:', p2[j], 'war:', war);
  if (p1[i] !== undefined && p2[j] !== undefined) {
    if (!war) {
      if (card.indexOf(p1[i][0]) > card.indexOf(p2[j][0])) {
        p1.push(p2[0]);
        p2.shift();
        count++;
        battle(i, j, false);
      } else if (card.indexOf(p1[i][0]) < card.indexOf(p2[j][0])) {
        p2.push(p1[0]);
        p1.shift();
        count++;
        battle(i, j, false);
      } else if (card.indexOf(p1[i][0]) === card.indexOf(p2[j][0])) {
        battle(i + 4, j + 4, true);
      }
    } else if (war && p1.length > 3 && p2.length > 3) {
      if (card.indexOf(p1[i][0]) > card.indexOf(p2[j][0])) {
        p1.push(p2[i - 4], p2[i - 3], p2[i - 2], p2[i - 1]);
        p2.shift();
        p2.shift();
        p2.shift();
        p2.shift();
      } else if (card.indexOf(p1[i][0]) < card.indexOf(p2[j][0])) {
        p2.push(p1[i - 4], p1[i - 3], p1[i - 2], p1[i - 1]);
        p1.shift();
        p1.shift();
        p1.shift();
        p1.shift();
      } else if (card.indexOf(p1[i][0]) === card.indexOf(p2[j][0])) {
        battle(i + 4, j + 4, true);
      }
    }
  } else {
    if (p1.length > p2.length) {
      return (answer = `1 ${count}`);
    } else if (p1.length < p2.length) {
      return (answer = `2 ${count}`);
    } else if (p1.length === p2.length) {
      return (answer = 'PAT');
    }
  }
}
p1.map((one, i) => {
  p2.map((two, j) => {
    battle(i, j, false);
  });
  //   console.log('p1:', p1, '\n', 'p2:', p2, '\n', 'count:', count);
});
console.log(answer);
