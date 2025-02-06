def solution(sequence, k):
  s_len=len(sequence)
  result = [0,s_len-1]

  for start in range(s_len-1,0,-1):
    # print('-'*50)
    # print('start',start)
    total,idx= 0,start

    while idx > -1 and start-(idx+1) <= result[1] - result[0]:
      # print('- idx',idx, sequence[idx])

      if total < k:
        total+=sequence[idx]
        idx-=1
      else:
        break

      # print('total', total)
      if total == k:
        # print(' sequence[idx:start]',idx,start, sequence[idx:start])
        # print(' sequence[idx+1:start+1]',idx+1,start+1, sequence[idx+1:start+1])
        if start-idx > 0 and sequence[idx:start] == sequence[idx+1:start+1]:
          # print('same prev')
          break
        else:
          return [idx+1,start]


# print(solution([1, 2, 3, 4, 5],	7))
# print(solution([1, 1, 1, 2, 3, 4, 5],	5))
# print(solution([2, 2, 2, 2, 2],	6))
print(solution([1,2, 2, 2, 2, 2,3],	6))

# [1, 2, 3, 4, 5]	7	[2, 3]
# [1, 1, 1, 2, 3, 4, 5]	5	[6, 6]
# [2, 2, 2, 2, 2]	6	[0, 2]
