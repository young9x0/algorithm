let countingSort = function (array, k) {
  let count = [],
    result = [];
  for (let i = 0; i <= k; i++) {
    count[i] = 0;
  }
  //[3,4,0,1,2,4,2,4], [0,0,0,0,0], [result자리]
  for (let j = 0; j < array.length; j++) {
    count[array[j]] += 1;
  }
  //[3,4,0,1,2,4,2,4], [1,1,2,1,3], [result자리]
  for (let i = 0; i < k; i++) {
    count[i + 1] += count[i];
  }
  //[3,4,0,1,2,4,2,4], [1,2,4,5,8], [result자리]
  for (let j = 0; j < array.length; j++) {
    console.log(array[j], count[array[j]] - 1);
    result[count[array[j]] - 1] = array[j];
    count[array[j]] -= 1;
  }
  return result;
  //[3,4,0,1,2,4,2,4], [1,2,4,5,8], [0,1,2,2,3,4,4,4]
};
// 배열에 큰 수가 들어갈 수록 메모리를 많이 잡아먹기 때문에 좋지 않습니다.
countingSort([3, 4, 0, 1, 2, 4, 2, 4], 4); // [0,1,2,2,3,4,4,4]
