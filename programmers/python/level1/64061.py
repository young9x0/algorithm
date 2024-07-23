def solution(board, moves):
  temp=[]

  for move in moves:
    # print('---move', move)
    for dep in range(len(board)):
      # print('board[dep][move]', board[dep][move-1])
      if board[dep][move-1] > 0:
        # print('hello')
        temp.append(board[dep][move-1])
        board[dep][move-1] = 0
        # print('board', board)
        break

  # print('temp',temp)
  answer = 0
  idx = 0
  while idx+1 < len(temp):
    # print('idx',idx)
    if temp[idx] == temp[idx+1]:
      answer += 2
      temp.pop(idx+1)
      temp.pop(idx)
      # print('temp', temp)
      if idx > 0:
        idx -= 1
      continue
    else:
      idx += 1

  return answer

print(solution( [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]],	[1,5,3,5,1,2,1,4]))
# [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]]	[1,5,3,5,1,2,1,4]	4
