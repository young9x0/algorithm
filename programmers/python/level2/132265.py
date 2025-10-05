 # https://velog.io/@k_bobin/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4Python-%EB%A1%A4%EC%BC%80%EC%9D%B4%ED%81%AC-%EC%9E%90%EB%A5%B4%EA%B8%B0

from collections import Counter
def solution(topping):
  # right=dict()
  # for t in topping:
  #   if t in right:
  #     right[t] += 1
  #   else:
  #     right[t] = 1
  right = Counter(topping)
  # print(right)

  left=set()
  cnt=0
  for t in topping:
    right[t] -= 1
    left.add(t)

    if right[t] == 0:
      right.pop(t)
    if len(left) == len(right):
      cnt+=1

  return cnt


# print(solution([1, 2, 1, 3, 1, 4, 1, 2]))
# print(solution([2, 2, 2, 2, 1, 1, 2, 3, 2]))
# print(solution([1, 2, 3, 3, 2, 2, 2, 2, 2, 1]))
# print(solution([1, 2, 2, 2, 2, 2, 3, 3, 2, 1]))
# print(solution([1, 2, 3, 1, 4]))
# print(solution([1, 2, 1, 1, 4]))
print(solution([1,1,1,1,1]))
# print(solution([7,1,8,1,8,7]))
# print(solution([2,4,3,2,4,3,2,8]))
# print(solution([3,2,2,1,1,2,2,3,2,1]))
# print(solution([2,1,1,3,1,3,1,1,1,2,1]))
# print(solution([1,1,4,7,7,5]))
# 2
# 1
# 2
# 0
# 2
# 4
# 1
# 1
# 4
# 2
# 1
