def solution(nums):
  nLen = len(nums)
  sList = []
  for idx, num in enumerate(nums):
    for sIdx in range(idx+1, nLen):
      for tIdx in range(sIdx+1, nLen):
       sList.append(sum([num, nums[sIdx], nums[tIdx]]))

  # print(sList)
  pList = [num  for num in range(4, sList[-1]+1)]
  for divide in range(2, sList[-1]+1):
    for num in pList:
      if num != divide and num % divide == 0:
        pList.remove(num)

  # print(pList)

  answer = 0
  for pNum in pList:
    for sNum in sList:
      if sNum == pNum:
        answer +=1

  return answer


# print(solution([1,2,3,4]))
print(solution([1,2,7,6,4]))
# [1,2,3,4]	1
# [1,2,7,6,4]	4
