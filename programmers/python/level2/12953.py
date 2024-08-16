def solution(arr):
  def gcd(a,b):
    print('a',a)
    print('b',b)
    if b == 0:
      return a
    return gcd(b, a%b)

  answer = arr[0]
  for num in arr:
    print('num',num)
    print('answer',answer)
    print('gcd',gcd(num, answer))
    answer = num*answer // gcd(num, answer)

  return answer

# print(solution([2,6,8,14]))
print(solution([14,24,36,18]))
# print(solution([1,2,3]))
# [2,6,8,14]	168
# [1,2,3]	6
