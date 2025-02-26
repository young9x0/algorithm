from math import gcd
from functools import reduce

def solution(arrayA, arrayB):
  a_gcd = reduce(gcd, arrayA)
  b_gcd = reduce(gcd, arrayB)
  print('a_gcd', a_gcd)
  print('b_gcd', b_gcd)
  ans = 0

  if all(num % a_gcd  for num in arrayB):
    print('a_gcd', a_gcd)
    if ans < a_gcd:
      ans = a_gcd
  if all(num % b_gcd  for num in arrayA):
    print('b_gcd', b_gcd)
    if ans < b_gcd:
      ans = b_gcd

  return ans
# print(solution([10, 17],	[5, 20]))
# print(solution([10, 20],	[5, 17]))
# print(solution([14, 35, 119],	[18, 30, 102]))
print(solution(	[18, 30, 102],[14, 35, 119]))

# [10, 17]	[5, 20]	0
# [10, 20]	[5, 17]	10
# [14, 35, 119]	[18, 30, 102]	7