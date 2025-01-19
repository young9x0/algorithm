from collections import deque
def solution(x,y,n):
  visited=[0]*1000001
  q=deque()
  q.append((x,0))
  visited[x]=1

  while q:
    num, cnt = q.popleft()
    if num == y:
      return cnt
    for next in (num+n,num*2,num*3):
      if next <= y and not visited[next]:
        visited[next]=1
        q.append((next, cnt+1))

  return -1

print(solution(10,	40,	5))
print(solution(10,	40,	30))
print(solution(2,	5,	4))
print(solution(1,1,1))
print(solution(2,	14,	5))
print(solution(2,	14,	1))
print(solution(4,	20,	1))
print(solution(4,	23,	1))
print(solution(7,	23,	12))
print(solution(7,	31,	5))

# 2
# 1
# -1
# 0
# 2
# 3
