def solution(ingredient):
  cnt = 0
  in_dict = {}
  order = [1,2,3,1]
  cur_idx = 0

  for idx, num in enumerate(ingredient):
    in_dict[idx] = 1

  idx = 0
  while idx < len(ingredient):
    # print('-----idx',idx, 'ingredient[idx]', ingredient[idx])
    # print('cur_idx', cur_idx, 'order[cur_idx]',order[cur_idx])
    # print('in_dict[idx]', in_dict[idx])
    if in_dict[idx] == 0:
      idx += 1
      continue

    if ingredient[idx] == order[cur_idx]:
      # print('hello', cur_idx)
      if cur_idx == 3:
        cnt += 1
        for i in range(4):
          # print('i',i, idx-i)
          in_dict[idx-i] = 0
        # print('in_dict',in_dict)
        idx, cur_idx = 0, 0
        continue

      cur_idx += 1
    else:
      # print('reset')
      if cur_idx > 0:
        cur_idx = 0
        continue

    idx += 1
    # print('in_dict', in_dict)


  return cnt

# print(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]))
print(solution([1, 3, 2, 1, 2, 1, 3, 1, 2]))
# [2, 1, 1, 2, 3, 1, 2, 3, 1]	2
# [1, 3, 2, 1, 2, 1, 3, 1, 2]	0
# 1, 2, 3, 1
