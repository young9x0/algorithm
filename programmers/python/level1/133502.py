def solution(ingredient):
  cnt = 0
  temp = []

  for i in ingredient:
    temp.append(i)
    if temp[-4:] == [1,2,3,1]:
      cnt += 1
      for n in range(4):
        temp.pop()
  return cnt

# print(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]))
print(solution([1, 3, 2, 1, 2, 1, 3, 1, 2]))
# [2, 1, 1, 2, 3, 1, 2, 3, 1]	2
# [1, 3, 2, 1, 2, 1, 3, 1, 2]	0
# 1, 2, 3, 1
