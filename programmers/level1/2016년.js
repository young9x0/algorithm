function solution(a, b) {
  const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  return week[new Date(2020, a - 1, b).getDay()];
}
console.log(solution(10, 23));
