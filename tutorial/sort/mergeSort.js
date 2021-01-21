function mergeSort(array) {
  if (array.length < 2) return array;
  let pivot = Math.floor(array.length / 2);

  let left = array.slice(0, pivot);
  let right = array.slice(pivot, array.length);
  return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
  console.log(left, right);
  //   [ 5 ] [ 2 ]
  // [ 4 ] [ 7 ]
  // [ 2, 5 ] [ 4, 7 ]
  // [ 6 ] [ 1 ]
  // [ 3 ] [ 8 ]
  // [ 1, 6 ] [ 3, 8 ]
  // [ 2, 4, 5, 7 ] [ 1, 3, 6, 8 ]
  // [
  //   1, 2, 3, 4,
  //   5, 6, 7, 8
  // ]
  let result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) result.push(left.shift());
  while (right.length) result.push(right.shift());
  return result;
}
let a = mergeSort([5, 2, 4, 7, 6, 1, 3, 8]);

console.log(a);
