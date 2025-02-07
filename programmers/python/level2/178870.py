from collections import deque
def solution(sequence, k):
  s_len=len(sequence)
  dq=deque([])
  idx = s_len-1
  total= 0
  while idx >-1:
    # print('-'*50)
    # print('idx',idx)
    if total < k:
      total+=sequence[idx]
      dq.append((idx,sequence[idx]))
      idx-=1
    else:
      first=dq.popleft()
      # print('first',first)
      total-=first[1]

    # print('dq',dq)
    # print('total', total)
    if total == k:
      # print('sequence[idx], dq[0][1]',sequence[idx], dq[0][1])
      if idx>-1 and sequence[idx] == dq[0][1]:
        # print('plus prev is same total')
        first=dq.popleft()
        # print('first',first)
        total-=first[1]
      else:
        # print('dq',dq)
        return [idx+1,dq[0][0]]

# print(solution([1, 2, 3, 4, 5],	7))
# print(solution([1, 1, 1, 2, 3, 4, 5],	5))
# print(solution([2, 2, 2, 2, 2],	6))
# print(solution([1,2, 2, 2, 2, 2,3],	6))
# print(solution([1,2,2,3,4,5,5],	11))

# [1, 2, 3, 4, 5]	7	[2, 3]
# [1, 1, 1, 2, 3, 4, 5]	5	[6, 6]
# [2, 2, 2, 2, 2]	6	[0, 2]
