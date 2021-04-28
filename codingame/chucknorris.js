//문제:
//https://www.codingame.com/ide/puzzle/chuck-norris
//참고코드:
//https://gist.github.com/dukeDanjou/73600a15e4977ef48c8d

function textToBin(text) {
  const length = text.length;
  let output = '';
  for (let i = 0; i < length; i++) {
    let bin = text.charCodeAt(i).toString(2);

    if (bin.length < 7) {
      bin = '0' + bin;
    }
    output += bin;
  }
  return output;
}
const encode = {
  0: '00',
  1: '0',
};
// const binaryText = textToBin('CC');
const binaryText = textToBin('%');
let currentSign = binaryText[0];
let output = encode[currentSign] + ' ' + '0';
for (let i = 1; i < binaryText.length; i++) {
  let nextBit = binaryText[i];
  output += nextBit !== currentSign ? ' ' + encode[nextBit] + ' ' + '0' : '0';
  currentSign = nextBit;
}
console.log(output);
