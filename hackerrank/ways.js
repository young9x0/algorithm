function ways(total, k) {
  let arr = [];
  for (let i = 1; i <= k; i++) {
    arr.push(i);
  }

  const cache = [];
  for (let i = 0; i <= total; i++) {
    cache[i] = i % arr[0] ? 0 : 1;
  }
  for (let i = 1; i < arr.length; i++) {
    for (let j = arr[i]; j <= total; j++) {
      cache[j] += cache[j - arr[i]];
    }
  }
  return cache[total] % 1000000007;
}

let a = ways(5, 3);

console.log(a);
