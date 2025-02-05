from itertools import chain

def solution(n):
  answer = []
  [row, col, cnt] = [-1,0,1]
  board=[[None]* i for i in range(1,n+1)]
  # print(board)

  for i in range(n):
    for _ in range(n-i):
      if i%3==0:
        # down
        row+=1
      elif i%3==1:
        # next
        col+=1
      else:
        # up
        row-=1
        col-=1

      board[row][col] = cnt
      cnt+=1

  print(board)
  return list(chain(*board))

# print(solution(4))
# print(solution(5))
print(solution(6))
# print(solution(7))

# 4	[1,2,9,3,10,8,4,5,6,7]
# 5	[1,2,12,3,13,11,4,14,15,10,5,6,7,8,9]
# 6	[1,2,15,3,16,14,4,17,21,13,5,18,19,20,12,6,7,8,9,10,11]
