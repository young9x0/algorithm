from itertools import combinations
def solution(nums):
  answer = 0

  for comb in combinations(nums, 3):
    cSum = sum(comb)
    for divide in range(2, cSum):
      print(cSum, divide)
      if cSum % divide == 0:
        break

    else:
      print('hello')
      answer += 1
  return answer



print(solution([1,2,3,4]))
# print(solution([1,2,7,6,4]))
# [1,2,3,4]	1
# [1,2,7,6,4]	4
