def solution(arr, query):
  for idx, target in enumerate(query):
    if idx % 2 == 0:
      # print('2 idx, arr', idx, arr)
      arr = arr[:target+1]
    else:
      # print('1 idx, arr', idx, arr)
      arr = arr[target:]
  return arr

print(solution([0, 1, 2, 3, 4, 5]	,[4, 1, 2]))
# [0, 1, 2, 3, 4, 5]	[4, 1, 2]	[1, 2, 3]
