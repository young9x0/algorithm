//-2진수

const question = "-13"; //110111

const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin", "utf8").toString()
    : question
).split("\n");

let difference = 0,
  temp = [],
  result = [],
  i = 0;

while (!temp.length || input[0] < temp[temp.length - 1]) {
  i % 2 ? temp.push(-Math.pow(2, i)) : temp.push(Math.pow(2, i));
  i++;
}

// if (input[0] < -1) {
//   difference = input[0] - temp[temp.length - 1];
// } else {

// }

difference = temp[temp.length - 1] - input[0];
temp[temp.length - 1] = 1;
function toBinary(difference, i) {
  console.log(i, difference, temp[i - 1], temp);

  if (i > 0) {
    if (!((i - 1) % 2) && difference <= temp[i - 1]) {
      //1, 4, 16
      difference = difference + temp[i - 1];
      temp[i - 1] = 1;
    } else if (!!((i - 1) % 2) && difference <= temp[i - 1]) {
      //-2, -8
      difference = difference - temp[i - 1];
      temp[i - 1] = 1;
    } else {
      temp[i - 1] = 0;
    }
    toBinary(difference, i - 1);
  }

  return temp;
}
console.log(toBinary(difference, i - 1));
