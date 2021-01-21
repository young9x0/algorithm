const partition = function (array, left, right, pivotIndex) {
  // 정렬하는 부분
  let temp;
  let pivot = array[pivotIndex];
  while (left <= right) {
    while (array[left] < pivot) left++;
    while (array[right] > pivot) right--;
    if (left <= right) {
      temp = array[left];
      array[left] = array[right];
      array[right] = temp;
      left++;
      right--;
    }
  }
  temp = array[left];
  array[left] = array[pivotIndex];
  array[pivotIndex] = temp;
  //   console.log(left);
  return left; //4(기준 5의 위치)
};

const quickSort = function (array, left, right) {
  // 재귀하는 부분
  if (!left) left = 0;
  if (!right) right = array.length - 1;
  let pivotIndex = right;
  pivotIndex = partition(array, left, right - 1, pivotIndex); //right - 1을 하는 이유는 기준(현재 right)을 제외하고 정렬하기 위함입니다.한번 돌면 pivotIndex=4
  //left정렬이 모두 끝난 후 right정렬 시작하기

  if (left < pivotIndex - 1) {
    console.log('left:', left, 'pivotIndex - 1:', pivotIndex - 1, array);
    quickSort(array, left, pivotIndex - 1); //새로운 기준 4를 제외하고(pivotIndex - 1) 다시 반복, array= [4, 1, 2, 3, 5, 8, 7, 6], left=0, pivotIndex - 1=3
  }

  if (pivotIndex + 1 < right) {
    console.log('pivotIndex + 1:', pivotIndex + 1, 'right:', right, array);
    quickSort(array, pivotIndex + 1, right);
  } //array=[ 1, 2, 3, 4, 5, 8, 7, 6],right=7

  //   left: 0 pivotIndex - 1: 3 [
  //     4, 1, 2, 3,
  //     5, 8, 7, 6
  //   ]
  //   left: 0 pivotIndex - 1: 1 [
  //     2, 1, 3, 4,
  //     5, 8, 7, 6
  //   ]
  //   pivotIndex + 1: 5 right: 7 [
  //     1, 2, 3, 4,
  //     5, 8, 7, 6
  //   ]
  //   pivotIndex + 1: 6 right: 7 [
  //     1, 2, 3, 4,
  //     5, 6, 7, 8
  //   ]

  return array;
};

let a = quickSort([4, 1, 7, 6, 3, 8, 2, 5]); // [1,2,3,4,5,6,7,8]
console.log(a);
