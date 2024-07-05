def solution(nums):
  dict = {}
  pLen = int(len(nums)/2)

  for num in nums:
      dict[num] = 0
  for num in nums:
    dict[num] +=1

  sDict = sorted(dict.values())
  temp = sDict[-pLen:]
  # print(temp)

  return len(temp)

# print(solution([3,1,2,3]))
# print(solution([3,3,3,2,2,4]))
print(solution([3,3,3,2,2,2]))
# [3,1,2,3]	2
# [3,3,3,2,2,4]	3
# [3,3,3,2,2,2]	2
