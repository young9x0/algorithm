def solution(park, routes):
  result = []
  for row,col in enumerate(park):
    arr=list(col)
    if 'S' in arr:
       cur_row,cur_col  = row, arr.index("S")
  def check_obstacle(row,col):
    if (row<0 or row>= len(park)) or (col<0 or col>=len(park[0])) or park[row][col] == 'X': return False
    else: return True

  for route in routes:
    direct, move = route.split()
    move = int(move)

    if direct == 'E':
      new_col = cur_col + move
      for step_x in range(cur_col, new_col + 1):
        if check_obstacle(cur_row,step_x) == False:
          break
      else:
          cur_col = new_col
    elif direct == 'W':
          new_col = cur_col - move
          for step_x in range(new_col, cur_col + 1):
            if check_obstacle(cur_row,step_x) == False:
              break
          else:
            cur_col = new_col
    elif direct == 'N':
      new_row = cur_row - move
      for step_y in range(new_row, cur_row + 1):
        if check_obstacle( step_y, cur_col) == False:
          break
      else:
        cur_row = new_row
    elif direct == 'S':
      new_row = cur_row + move
      for step_y in range(cur_row, new_row + 1):
        if check_obstacle( step_y,cur_col) == False:
          break
      else:
        cur_row = new_row
  return [cur_row,cur_col]

print(solution(["OOO","OOO","OOS"],	["E 2","S 2","W 1"]	))
# print(solution(["SOO","OXX","OOO"],	["E 2","S 2","W 1"]))
# print(solution(["OSO","OOO","OXO","OOO"],	["E 2","S 3","W 1"]))
# ["SOO","OOO","OOO"]	["E 2","S 2","W 1"]	[2,1]
# ["SOO","OXX","OOO"]	["E 2","S 2","W 1"]	[0,1]
# ["OSO","OOO","OXO","OOO"]	["E 2","S 3","W 1"]	[0,0]
