// 알파벳 찾기

const question = `baekjoon`; //1 0 -1 -1 2 -1 -1 -1 -1 4 3 -1 -1 7 5 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1

const fs = require("fs");
const input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin", "utf8").trim()
    : question;

const inputArr = input.split("");
let alphabet = {
  a: -1,
  b: -1,
  c: -1,
  d: -1,
  e: -1,
  f: -1,
  g: -1,
  h: -1,
  i: -1,
  j: -1,
  k: -1,
  l: -1,
  m: -1,
  n: -1,
  o: -1,
  p: -1,
  q: -1,
  r: -1,
  s: -1,
  t: -1,
  u: -1,
  v: -1,
  w: -1,
  x: -1,
  y: -1,
  z: -1,
};

inputArr.map((str, idx) => {
  // console.log(!alphabet[str], str);

  if (alphabet[str] < 0) {
    alphabet[str] = idx;
  }
});

console.log(Object.values(alphabet).join(" "));
