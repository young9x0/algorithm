from collections import deque
def solution(maps):
  x_move=[1,0,-1,0]
  y_move=[0,1,0,-1]
  x_h, y_h=(len(maps[0]), len(maps))
  queue = deque([(0,0,1)])

  while queue:
    print('-'*50)
    print('queue',queue)
    x,y,d= queue.popleft()
    print('x,y,d',x,y,d)

    for i in range(len(x_move)):
      nx = x+x_move[i]
      ny = y+y_move[i]

      print(i,'nx,ny',nx,ny)

      if nx>-1 and ny>-1 and nx<x_h and ny<y_h:
        print('maps[ny][nx]',maps[ny][nx])
        if maps[ny][nx] == 1 or maps[ny][nx]>d+1:
          maps[ny][nx] = d+1
          if nx==x_h-1 and ny == y_h-1:
            return d+1

          print('=nx,ny,d',nx,ny,d+1)
          queue.append((nx,ny,d+1))

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
