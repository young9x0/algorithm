from itertools import combinations
def prime_number(num):
  answer = 0
  for i in range(1, int(num**0.5)+1):
    print('num', num)
    print('i', i)
    if num%i == 0:
      answer += 1
  print('answer', answer)
  return 1 if answer == 1 else 0


def solution(nums):
  return sum([prime_number(sum(sNum)) for sNum in combinations(nums, 3)])




print(solution([1,2,3,4]))
# print(solution([1,2,7,6,4]))
# [1,2,3,4]	1
# [1,2,7,6,4]	4
