def solution(sequence, k):
  s_len=len(sequence)

  start = s_len-1
  total,idx= 0,start
  while start >-1:
    # print('-'*50)
    # print('start',start)

    if idx > -1:
      # print('- idx',idx, sequence[idx])

      if total < k:
        total+=sequence[idx]
        idx-=1
      else:
        start-=1
        total,idx= 0,start

      # print('total', total)
      if total == k:
        # print(' sequence[idx:start]',idx,start, sequence[idx:start])
        # print(' sequence[idx+1:start+1]',idx+1,start+1, sequence[idx+1:start+1])
        if sequence[idx:start] == sequence[idx+1:start+1]:
          # print('same prev')
          start-=1
          total,idx= 0,start
        else:
          return [idx+1,start]
    else:
      start-=1
      total,idx= 0,start

# print(solution([1, 2, 3, 4, 5],	7))
# print(solution([1, 1, 1, 2, 3, 4, 5],	5))
# print(solution([2, 2, 2, 2, 2],	6))
# print(solution([1,2, 2, 2, 2, 2,3],	6))
print(solution([1,2,2,3,4,5,5],	11))

# [1, 2, 3, 4, 5]	7	[2, 3]
# [1, 1, 1, 2, 3, 4, 5]	5	[6, 6]
# [2, 2, 2, 2, 2]	6	[0, 2]
