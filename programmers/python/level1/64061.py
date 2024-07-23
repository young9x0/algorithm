def solution(board, moves):
  temp=[]
  answer = 0

  for move in moves:
    # print('---move', move)
    for dep in range(len(board)):
      # print('board[dep][move]', board[dep][move-1])
      if board[dep][move-1] > 0:
        # print('hello')
        temp.append(board[dep][move-1])
        board[dep][move-1] = 0
        # print('board', board)

        if len(temp) > 1:
          if temp[-1] == temp[-2]:
            temp[-2:] = []
            answer += 2
        break

  return answer

print(solution( [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]],	[1,5,3,5,1,2,1,4]))
# [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]]	[1,5,3,5,1,2,1,4]	4
