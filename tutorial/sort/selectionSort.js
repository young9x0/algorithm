const selectionSort = function (array) {
  let length = array.length;
  let minIndex, i, j, temp;
  for (i = 0; i < length - 1; i++) {
    minIndex = i;
    for (j = i + 1; j < length; j++) {
      if (array[j] < array[minIndex]) {
        //i는 고정됨, i가 1일 경우 한바퀴 돌면서 array[minIndex]보다 작은 경우 찾아 minIndex에 저장하기, 한바퀴를 다 돌면 array[minIndex]=2가 됨
        minIndex = j; //array[minIndex]=4, 2,
      }
      console.log(i, j, minIndex);
      // 1 2 1
      // 1 3 3
      // 1 4 3
      // 1 5 5
      // 1 6 6
      // 1 7 6
    }

    temp = array[minIndex]; //최솟값 temp에 임시저장, temp=1
    array[minIndex] = array[i]; //더 큰 수를 최솟값가 있던 자리로 넣기, array[1]=5
    array[i] = temp; //임시저장한 최솟값 한칸 앞으로 보내기, array[0]=1

    // array = [1,5,4,7,2,6,8,3]
  }
  return array;
};

selectionSort([5, 1, 7, 4, 6, 3, 2, 8]);
