def solution(priorities, location):
  answer=0
  p_max = max(priorities)
  while True:
    cur= priorities.pop(0)
    if p_max == cur:
      answer+=1
      if location == 0:
        break
      else:
        location-=1
      p_max=max(priorities)
    else:
      priorities.append(cur)
      if location == 0:
        location = len(priorities)-1
      else:
        location-=1
  return answer
# print(solution([2, 1, 3, 2],	2))
print(solution([1, 1, 9, 1, 1, 1],	0	))
# [2, 1, 3, 2]	2	1
# [1, 1, 9, 1, 1, 1]	0	5
