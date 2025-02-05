from itertools import chain

def solution(n):
  # down, next, up
  dx = [0,1,-1]
  dy = [1,0,-1]

  board=[[0]* i for i in range(1,n+1)]
  # print(board)

  x,y=0,0
  num=1
  direction=0
  last_num = (n+1)*n//2
  print('last_num',last_num)
  # n=6 -> 6+5+...+1 -> (7*6) // 2
  while num <= last_num:
    board[y][x]=num
    ny=y+dy[direction]
    nx=x+dx[direction]
    num+=1

    if 0<= ny < n and 0 < nx <= ny and board[ny][nx] == 0:
      y,x=ny,nx
    else:
      direction=(direction+1)%3
      y+=dy[direction]
      x+=dx[direction]

  print(board)
  return sum(board,[])

# print(solution(4))
print(solution(5))
# print(solution(6))
# print(solution(7))

# 4	[1,2,9,3,10,8,4,5,6,7]
# 5	[1,2,12,3,13,11,4,14,15,10,5,6,7,8,9]
# 6	[1,2,15,3,16,14,4,17,21,13,5,18,19,20,12,6,7,8,9,10,11]
