def solution(board, h, w):
  answer = 0
  length = len(board)
  dh, dw = [0,1-1,0],[1,0,0,-1]

  for idx in range(4):
    h_check, w_check = h+dh[idx], w+dw[idx]
    if 0 <= h_check < length and 0 <= w_check < length:
      if board[h][w] == board[h_check][w_check]:
        answer += 1

  return answer

print(solution( [["blue", "red", "orange", "red"], ["red", "red", "blue", "orange"], ["blue", "orange", "red", "red"], ["orange", "orange", "red", "blue"]]	,1	,1	))
print(solution( [["yellow", "green", "blue"], ["blue", "green", "yellow"], ["yellow", "blue", "blue"]]	,0	,1))
# [["blue", "red", "orange", "red"], ["red", "red", "blue", "orange"], ["blue", "orange", "red", "red"], ["orange", "orange", "red", "blue"]]
# 1	1	2
# [["yellow", "green", "blue"], ["blue", "green", "yellow"], ["yellow", "blue", "blue"]]
# 0	1	1
