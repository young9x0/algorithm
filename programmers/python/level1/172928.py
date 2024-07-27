def solution(park, routes):
  current = []
  obstacle_list = []
  for row, cols in enumerate(park):
    if "S" in cols:
      for idx in range(len(cols)):
        if cols[idx] == 'S':
          current = [row, idx]
    if "X" in cols:
      for idx in range(len(cols)):
        if cols[idx] == 'X':
          obstacle_list.append([row, idx])

  # print(current, obstacle_list)
  max_row= len(routes)-1
  max_col = len(routes[0])-1
  route_dir =  [(route[0],int(route[-1])) for route in routes]
  for (op, n) in route_dir:
    cur_row, cur_col =current
    # print(current)
    # print('-'*50)
    # print(op,n)
    block=False
    if op == "N":
      if cur_row - n < 0:
        continue
      for obstacle in obstacle_list:
        if cur_col == obstacle[1] and cur_row >  obstacle[0] and cur_row-n <= obstacle[0]:
          block= True
          break
      if block:
        continue
      current = [cur_row-n, cur_col]
      continue
    if op == "S":
      if cur_row + n > max_row:
        continue
      for obstacle in obstacle_list:
        if cur_col == obstacle[1] and cur_row <  obstacle[0] and cur_row+n >= obstacle[0]:
          block=True
          break
      if block:
        continue
      current = [cur_row+n, cur_col]
      continue
    if op == "W":
      if cur_col - n <0:
        continue
      for obstacle in obstacle_list:
        if cur_row == obstacle[0] and cur_row >  obstacle[1] and cur_col-n <= obstacle[1]:
           block=True
           break
      if block:
        continue
      current = [cur_row, cur_col-n]
      continue
    if op == "E":
      if cur_col + n > max_col:
        continue
      for obstacle in obstacle_list:
        if cur_row == obstacle[0] and cur_row <  obstacle[1] and cur_col+n >= obstacle[1]:
          block=True
          break
      if block:
        continue
      current = [cur_row, cur_col+n]

  return current

print(solution(["SOO","OOO","OOO"],	["E 2","S 2","W 1"]	))
# print(solution(["SOO","OXX","OOO"],	["E 2","S 2","W 1"]))
# print(solution(["OSO","OOO","OXO","OOO"],	["E 2","S 3","W 1"]))
# ["SOO","OOO","OOO"]	["E 2","S 2","W 1"]	[2,1]
# ["SOO","OXX","OOO"]	["E 2","S 2","W 1"]	[0,1]
# ["OSO","OOO","OXO","OOO"]	["E 2","S 3","W 1"]	[0,0]
