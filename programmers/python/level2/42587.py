from collections import deque
def solution(priorities, location):
  answer = 0
  idx_list=deque((idx, priority) for idx, priority in enumerate(priorities))
  # print(idx_list)
  sorted_priorities=deque(sorted(priorities,reverse=True))
  temp=[]
  while len(temp) < len(priorities):
    # print('idx_list',idx_list)
    target = idx_list[0]
    # print('target',target)
    # print('sorted_priorities[0]',sorted_priorities[0])
    # print('target[1]',target[1])
    if target[1] == sorted_priorities[0]:
      temp.append(target)
      sorted_priorities.popleft()
      idx_list.popleft()
    else:
      # idx_list=idx_list[1:]+idx_list[0]
      idx_list.popleft()
      idx_list.append(target)

  # print('temp',temp)
  for t_idx, (idx,priority) in enumerate(temp):
    if idx == location:
      answer= t_idx+1

  return answer

# print(solution([2, 1, 3, 2],	2))
print(solution([1, 1, 9, 1, 1, 1],	0	))
# [2, 1, 3, 2]	2	1
# [1, 1, 9, 1, 1, 1]	0	5
