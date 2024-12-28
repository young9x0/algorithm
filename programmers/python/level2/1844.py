from collections import deque
def solution(maps):
  n,m= len(maps), len(maps[0])

  dx=[-1,1,0,0]
  dy=[0,0,-1,1]
  visited=[[False for _ in range(m)] for _ in range(n)]
  queue=deque([(0,0)])

  while queue:
    x,y=queue.popleft()
    if x==n-1 and y==m-1:
      return maps[x][y]

    for i in range(len(dx)):
      nx,ny=x+dx[i], y+dy[i]

      if 0<=nx< n and 0<=ny<m:
        if not visited[nx][ny] and maps[nx][ny] !=0:
          queue.append((nx,ny))
          visited[nx][ny]=True
          maps[nx][ny]=maps[x][y]+1
          
  return -1

# print(solution([[1,1,1],[1,1,1],[1,0,0],[1,1,1]]))
# print(solution([[1,1,1],[1,0,1],[1,0,1]]))
# print(solution([[1,1,0],[1,0,0],[1,1,1]]))
# print(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]))
print(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]]))

# [[1,1,1],[1,1,1],[1,0,0],[1,1,1]]	6
# [[1,1,1],[1,0,1],[1,0,1]]	5
# [[1,1,1],[1,0,1],[1,0,1]]	5
# [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]	11
# [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]]	-1
