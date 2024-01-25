//https://school.programmers.co.kr/learn/courses/30/lessons/42839
//소수 찾기
function solution(numbers) {
  const splited = numbers.split('');
  // console.log('splited', splited);
  const answer = [...splited];

  function isPrime(str) {
    const num = Number(str);
    if (num < 2) {
      return false;
    }
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  function comb(list, picked) {
    // console.log('---list', list);
    // console.log('picked', picked);
    if (list.length === 0) {
      return;
    }
    list.forEach((str, idx) => {
      const pushed = [...picked, str];
      const unshifted = [str, ...picked];

      if (pushed.length > numbers.length) {
        return;
      }

      const joinedPush = pushed.join('');
      const joinedUnshifted = unshifted.join('');
      const isExistPushed = answer.filter((res) => res === joinedPush).length > 0;
      const isExistUnshifted = answer.filter((res) => res === joinedUnshifted).length > 0;
      if (!isExistPushed) {
        answer.push(joinedPush);
      }
      if (!isExistUnshifted) {
        answer.push(joinedUnshifted);
      }

      // console.log('answer', answer);
      list.shift();
      comb(list, pushed);
      comb(list, unshifted);
    });
  }

  for (let i = 0; i < splited.length; i++) {
    // console.log('===i', i);
    const filtered = splited.filter((str) => str !== splited[i]);
    comb(filtered, [splited[i]]);
  }

  return answer.filter(isPrime).length;
}

// console.log(solution('123')); //15
// console.log(solution('17')); //3  [7, 17, 71]
console.log(solution('011')); //2  [11, 101]
