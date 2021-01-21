var bubbleSort = function (array) {
  var length = array.length;
  var i, j, temp;
  for (i = 0; i < length - 1; i++) {
    // 순차적으로 비교하기 위한 반복문
    for (j = 0; j < length - 1 - i; j++) {
      // 한번 돌면 마지막 수가 가장 크다
      if (array[j] > array[j + 1]) {
        // 두 수를 비교하여 앞 수가 뒷 수보다 크면
        temp = array[j]; //큰수 temp에 임시저장
        array[j] = array[j + 1]; //작은 수 앞으로 한자리 당기기
        array[j + 1] = temp; //임시저장한 큰수 한칸 뒤로 보내기
      }
    }
  }
  return array;
};

bubbleSort([5, 1, 7, 4, 6, 3, 2, 8]);
