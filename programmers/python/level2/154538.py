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
    next=[]
    while len(temp)>0:
      tmp= temp.popleft()
      next_tmp = [tmp+n, tmp*2, tmp*3]
      # print('tmp',tmp)
      # print('next_tmp',next_tmp)

      if y in next_tmp:
        # print('match!')
        return idx

      plus, two, three = next_tmp
      if plus < y:
        next.append(plus)
      if two < y:
        next.append(two)
      if three < y:
        next.append(three)

    if len(next)>0:
      temp = deque(next)

  return -1

print(solution(10,	40,	5))
print(solution(10,	40,	30))
print(solution(2,	5,	4))
# print(solution(1,1,1))
# print(solution(2,	14,	5))
print(solution(2,	14,	1))

# 10	40	5	2
# 10	40	30	1
# 2	5	4	-1
