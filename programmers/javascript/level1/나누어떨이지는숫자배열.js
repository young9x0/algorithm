function solution(arr, divisor) {
  var answer = [],
    temp = [],
    save = 0,
    fir,
    sec;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor == 0) {
      temp.push(arr[i]);
    }
  }
  for (let i = 0; i < temp.length - 1; i++) {
    fir = i;
    for (sec = fir + 1; sec < temp.length; sec++) {
      if (temp[fir] > temp[sec]) {
        fir = sec;
      }
    }
    save = temp[fir];
    temp[fir] = temp[i];
    temp[i] = save;
  }
  console.log(temp);
  if (temp.length != 0) {
    answer = temp;
  } else {
    answer = [-1];
  }
  return answer;
}
//console.log(solution([5, 9, 7, 10],4));
solution([5, 9, 7, 10], 4);

function sol(arr, divisor) {
  const ans = arr.filter((el) => el % divisor === 0);
  return ans.length ? ans.sort((p, c) => p - c) : [-1];
}
console.log(sol([5, 9, 7, 10], 5));
