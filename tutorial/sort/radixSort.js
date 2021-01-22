let counter = [[]];
const radixLSD = function (array, d) {
  let mod = 10; //현재 정렬 중인 자리수
  for (let i = 0; i < d; i++, mod *= 10) {
    for (let j = 0; j < array.length; j++) {
      let bucket = parseInt(array[j] % mod);
      // console.log('bucket', bucket);
      if (counter[bucket] == null) {
        counter[bucket] = [];
      }
      counter[bucket].push(array[j]); // 나머지 별로 묶어주기
      // console.log('bucket', bucket, counter[bucket]);
    }
    // console.log(counter.slice(0));
    let pos = 0;

    for (let j = 0; j < counter.length; j++) {
      let value = null;
      if (counter[j] != null) {
        while ((value = counter[j].shift()) != null) {
          array[pos++] = value;
        }
      }
    }
    console.log(array);
  }
  return array;
};
radixLSD([125, 383, 274, 96, 0, 9, 81, 72], 3); // [0,9,72,81,96,125,274,383]
