def solution(ingredient):
  cnt = 0
  in_len = len(ingredient)
  idx = 0
  while idx < in_len - 3:
    # print('idx',idx)
    if ingredient[idx:idx+4] == [1,2,3,1]:
      cnt += 1
      ingredient = ingredient[:idx] + ingredient[idx+4:]
      idx = 0
      in_len = len(ingredient)
      # print('ingredient', ingredient)
    else:
      idx += 1

  # print('cnt', cnt)
  return cnt

# print(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]))
print(solution([1, 3, 2, 1, 2, 1, 3, 1, 2]))
# [2, 1, 1, 2, 3, 1, 2, 3, 1]	2
# [1, 3, 2, 1, 2, 1, 3, 1, 2]	0
# 1, 2, 3, 1
