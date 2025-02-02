def solution(queue1, queue2):
  q_full = queue1+queue2
  # print('half', half)
  if sum(q_full)%2 > 0:
    return -1

  s_idx, l_idx, cnt = 0, len(queue1), 0
  half = sum(q_full) // 2
  q1_sum=sum(queue1)

  while q1_sum != half:
    # print('-'*50)
    # print('q_full[s_idx:l_idx]',q_full[s_idx:l_idx])
    # print('s_idx',s_idx)
    # print('l_idx',l_idx)
    # print('cnt',cnt)

    if (s_idx == l_idx) or (l_idx == len(q_full)):
      return -1

    if q1_sum > half:
      q1_sum-=q_full[s_idx]
      s_idx+=1
      cnt+=1
    elif q1_sum < half:
      q1_sum+=q_full[l_idx]
      l_idx+=1
      cnt+=1

  return cnt

# print(solution([3, 2, 7, 2],	[4, 6, 5, 1]))
# print(solution([1, 2, 1, 2],	[1, 10, 1, 2]))
# print(solution([1, 1],	[1, 5]))
# print(solution([1,1,9,8],	[1,5,1]))
print(solution([1,2,1,6],	[1,1,1,15]))

# [3, 2, 7, 2]	[4, 6, 5, 1]	2
# [1, 2, 1, 2]	[1, 10, 1, 2]	7
# [1, 1]	[1, 5]	-1
#2
#-1
