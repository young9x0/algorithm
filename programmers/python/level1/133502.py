def solution(ingredient):

  cnt = 0
  ingredient_str = ''.join(str(ch) for ch in ingredient)

  idx = 0
  while idx < len(ingredient_str):
    # print('---',ingredient_str[idx])
    # print('ingredient_str',ingredient_str)
    if ingredient_str[idx:idx+4] == '1231':
      # print('hello')
      cnt += 1
      ingredient_str = ingredient_str[:idx] + ingredient_str[idx+4:]
      idx = 0
    else:
      idx += 1

  return cnt

# print(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]))
print(solution([1, 3, 2, 1, 2, 1, 3, 1, 2]))
# [2, 1, 1, 2, 3, 1, 2, 3, 1]	2
# [1, 3, 2, 1, 2, 1, 3, 1, 2]	0
# 1, 2, 3, 1
