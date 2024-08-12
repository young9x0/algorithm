from collections import deque

def solution(people, limit):
  result=0
  deque_people = deque(sorted(people))
  print(deque_people)
  while deque_people:
    print('deque_people',deque_people)
    left = deque_people.popleft()
    if not deque_people:
      print('if not', deque_people)
      return result+1
    right = deque_people.pop()
    if left+right>limit:
      deque_people.appendleft(left)
    result+=1
  return result

# print(solution([70, 50, 80, 50, 50 ],	100	))
# print(solution([70, 50, 80, 50],	100	))
# print(solution([70, 80, 50],	100	))
# print(solution([70],	100	))
print(solution([50, 50, 50, 60, 70, 80, 40],	100	))
# [70, 50, 80, 50]	100	3
# [70, 80, 50]	100	3
