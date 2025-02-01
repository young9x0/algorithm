from collections import deque
def solution(queue1, queue2):
  if (sum(queue1) + sum(queue2))%2 > 0:
    return -1

  half = (sum(queue1) + sum(queue2)) // 2
  # print('half', half)

  dq1=deque(queue1)
  dq2=deque(queue2)
  cnt=0

  while sum(dq1) != half:
    dq_sum= sum(dq1)
    # print('dq1',dq1)
    # print('dq_sum',dq_sum)
    # print('cnt',cnt)

    if cnt > 0 and dq1 == deque(queue1):
      # print('reset', dq1, deque(queue1))
      return -1

    if dq_sum > half:
      el = dq1.popleft()
      dq2.append(el)
      cnt+=1
    elif dq_sum < half:
      el = dq2.popleft()
      dq1.append(el)
      cnt+=1

  return cnt

# print(solution([3, 2, 7, 2],	[4, 6, 5, 1]))
# print(solution([1, 2, 1, 2],	[1, 10, 1, 2]))
print(solution([1, 1],	[1, 5]))

# [3, 2, 7, 2]	[4, 6, 5, 1]	2
# [1, 2, 1, 2]	[1, 10, 1, 2]	7
# [1, 1]	[1, 5]	-1
