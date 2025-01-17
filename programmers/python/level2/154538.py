from collections import deque
def solution(x,y,n):
  # print(x,y,n)
  if x == y:
    return 0

  idx = 0
  temp=deque([x])

  while len(temp)>0:
    idx+=1
    # print('-'*50)
    # print('idx',idx)

    for tmp in temp:
      temp.popleft()
      next = [tmp+n, tmp*2, tmp*3]
      # print('tmp',tmp)
      # print('next',next)

      if y in next:
        # print('match!')
        return idx

      plus, two, three = next
      if plus < y:
        temp.append(plus)
      if two < y:
        temp.append(two)
      if three < y:
        temp.append(three)

  return -1

# print(solution(10,	40,	5))
# print(solution(10,	40,	30))
# print(solution(2,	5,	4))
print(solution(1,1,1))
# print(solution(2,	14,	5))
# print(solution(2,	14,	1))

# 10	40	5	2
# 10	40	30	1
# 2	5	4	-1
