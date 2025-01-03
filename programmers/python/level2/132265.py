def solution(topping):
  print('topping',topping)

  l, r = 0, len(topping)
  idx1 = 0
  while l <= r:
    m = (l + r) // 2
    print('l',l,', r',r, 'm',m)
    left = len(set(topping[:m]))
    right = len(set(topping[m:]))
    print('left',(topping[:m]), 'right',(topping[m:]))
    if left < right:
      l = m + 1
    elif left >= right:
      idx1 = m
      r = m - 1
      print('idx1',idx1)

  print('-'*50)
  l, r = 0, len(topping)
  idx2 = 0
  while l <= r:
    m = (l + r) // 2
    print('l',l,', r',r, 'm',m)
    left = len(set(topping[:m]))
    right = len(set(topping[m:]))
    print('left',(topping[:m]), 'right',(topping[m:]))
    if left <= right:
      idx2 = m
      l = m + 1
      print('idx2',idx2)
    elif left > right:
      r = m - 1

  return max(idx2 - idx1 + 1, 0)


# print(solution([2, 2, 2, 2, 1, 1, 2, 3, 2]))
# print(solution([1, 2, 3, 3, 2, 2, 2, 2, 2, 1]))
print(solution([1, 2, 1, 3, 1, 4, 1, 2]))
# print(solution([1, 2, 3, 1, 4]))
# print(solution([1, 2, 1, 1, 4]))
# print(solution([1,1,1,1,1]))
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
