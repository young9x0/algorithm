def solution(sequence, k):
  result = []
  s_len=len(sequence)

  for start in range(s_len):
    # print('start',start)
    total,idx= 0,start
    temp=[]

    while idx < s_len:
      if total < k:
        total+=sequence[idx]
        temp.append(sequence[idx])
        idx+=1
      else:
        break

      if total == k:
        # print('temp',temp)
        result.append(([start,idx-1], temp))
        break

  # print('result',result)
  if len(result) == 1:
    return result[0][0]
  else:
    sorted_res = sorted(result, key=lambda x: (x[0][1] - x[0][0], x[0][0]))

  return sorted_res[0][0]

# print(solution([1, 2, 3, 4, 5],	7))
# print(solution([1, 1, 1, 2, 3, 4, 5],	5))
print(solution([2, 2, 2, 2, 2],	6))

# [1, 2, 3, 4, 5]	7	[2, 3]
# [1, 1, 1, 2, 3, 4, 5]	5	[6, 6]
# [2, 2, 2, 2, 2]	6	[0, 2]
