//https://school.programmers.co.kr/learn/courses/30/lessons/42883
//큰 수 만들기
//해법:https://han-joon-hyeok.github.io/posts/programmers-making-the-biggest-number/

function solution(number, k) {
  const stack = [];

  for (const num of number) {
    console.log('stack', stack);
    console.log('num', num);
    while (k > 0 && stack[stack.length - 1] < num) {
      const popNum = stack.pop();
      console.log('popNum', popNum);
      k--;
      console.log('k', k);
    }
    stack.push(num);
    console.log('push', stack);
  }

  stack.splice(stack.length - k, k);
  return stack.join('');
}

// console.log(solution('1924', 2)); //"94"
// console.log(solution('1231234', 3)); //"3234"
console.log(solution('4177252841', 4)); //"775841"
