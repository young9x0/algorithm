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

if (input[0] < -1) {
  while (!temp.length || input[0] < temp[temp.length - 1]) {
    i % 2 ? temp.push(-Math.pow(2, i)) : temp.push(Math.pow(2, i));

    i++;
  }
  difference = temp[temp.length - 1] - input[0];
  toBinary(difference, i - 1);
}
function toBinary(difference, i) {
  console.log(difference, i);

  temp[i] = 1;

  if (difference < temp[i - 1]) {
    difference = difference + temp[i - 1];
  }

  !difference ? temp : toBinary(difference, i - 1);
}

console.log(temp, result);
