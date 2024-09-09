answer=0
n=0
visited=[]
d_list = []

def dfs(k,cnt):
  print('---k',k)
  print('cnt',cnt)
  print('visited',visited)
  global answer, d_list
  if cnt > answer:
    print('change')
    answer = cnt
  for idx in range(n):
    print('idx',idx)
    print('old visited',visited)
    if k >= d_list[idx][0] and not visited[idx]:
      visited[idx] = 1
      dfs(k-d_list[idx][1], cnt+1)
      visited[idx] = 0

def solution(k, dungeons):
  global n, visited, d_list
  n=len(dungeons)
  visited = [0]*n
  d_list = dungeons
  dfs(k,0)

  return answer

print(solution(80,	[[80,20],[50,40],[30,10]]))
# 3
