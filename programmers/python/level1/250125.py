def solution(board, h, w):
  answer = 0
  if h-1>=0 and board[h][w] == board[h-1][w]:
    answer += 1
  if h+1<len(board) and board[h][w] == board[h+1][w]:
    answer += 1
  if w-1>=0 and board[h][w] == board[h][w-1]:
    answer += 1
  if w+1<len(board) and  board[h][w] == board[h][w+1]:
    answer += 1

  return answer

print(solution( [["blue", "red", "orange", "red"], ["red", "red", "blue", "orange"], ["blue", "orange", "red", "red"], ["orange", "orange", "red", "blue"]]	,1	,1	))
print(solution( [["yellow", "green", "blue"], ["blue", "green", "yellow"], ["yellow", "blue", "blue"]]	,0	,1))
# [["blue", "red", "orange", "red"], ["red", "red", "blue", "orange"], ["blue", "orange", "red", "red"], ["orange", "orange", "red", "blue"]]
# 1	1	2
# [["yellow", "green", "blue"], ["blue", "green", "yellow"], ["yellow", "blue", "blue"]]
# 0	1	1
