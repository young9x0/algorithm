function getMinimumMoves(arr) {
  // Write your code here
  console.log(arr.length);
  let max = arr
    .sort((p, c) => {
      p - c;
    })
    .pop();
  let maxStr = max.toString();
  maxStr.length;
}
let a = getMinimumMoves([115, 1, 3, 2]);

console.log(a);
