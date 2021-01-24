function maxDifference(px) {
  let j,
    arr = [];

  px.map((p, i) => {
    for (j = 0; j < i; j++) {
      if (p > px[i - 1]) {
        if (!arr[0]) {
          arr[0] = p - px[i - 1];
        }
        if (arr[0] < p - px[j]) {
          arr[0] = p - px[j];
        }
      }
    }
  });

  return arr[0] ? arr[0] : -1;
}

let a = maxDifference([1, 3, 6, 10]);

console.log(a);
