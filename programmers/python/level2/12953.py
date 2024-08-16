from functools import reduce
def solution(arr):
  # 유클리드 호제법 증명: https://velog.io/@gjtang/%EC%9C%A0%ED%81%B4%EB%A6%AC%EB%93%9C-%ED%98%B8%EC%A0%9C%EB%B2%95
  def gcd(a,b):
    # print('a',a)
    # print('b',b)
    if b == 0:
      return a
    return gcd(b, a%b)

  return reduce(lambda a,b:a*b//gcd(a,b), arr)

print(solution([2,6,8,14]))
# print(solution([14,24,36,18]))
# print(solution([1,2,3]))
# [2,6,8,14]	168
# [1,2,3]	6
