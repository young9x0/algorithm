def solution(maps):
  r_len=len(maps)
  c_len=len(maps[0])
  result=[]

  def move_bfs(c_x, c_y, cnt, hist):
    # print('move_bfs')
    # print('-'*50)
    # print('cnt',cnt, 'x,y',c_x,c_y)

    if c_x == r_len-1 and c_y == c_len-1:
      return result.append(cnt)

    hist.append((c_x,c_y))
    # print('hist',hist)

    prev=(c_x,c_y)
    # right
    if c_y+1 < c_len and maps[c_x][c_y+1] == 1 and (c_x,c_y+1) not in hist:
      c_y+=1
      # print('R')

    # down
    elif c_x+1 < r_len and maps[c_x+1][c_y] == 1 and (c_x+1,c_y) not in hist:
      c_x+=1
      # print('D')

    # up
    elif c_x-1 > -1 and maps[c_x-1][c_y] == 1 and (c_x-1,c_y) not in hist:
      c_x-=1
      # print('U')

    # left
    elif c_y-1 > -1 and maps[c_x][c_y-1] == 1 and (c_x,c_y-1) not in hist:
      c_y-=1
      # print('L')

    # print('x,y',c_x,c_y)
    if (c_x,c_y) == prev:
      # print('all block!')
      return result.append(-1)
    else:
      # print('next')
      move_bfs(c_x,c_y,cnt+1,hist)

  def move_dfs(c_x, c_y, cnt, hist):
    # print('move_dfs')
    # print('-'*50)
    # print('cnt',cnt, 'x,y',c_x,c_y)

    if c_x == r_len-1 and c_y == c_len-1:
      return result.append(cnt)

    hist.append((c_x,c_y))
    # print('hist',hist)

    prev=(c_x,c_y)
    # down
    if  c_x+1 < r_len and maps[c_x+1][c_y] == 1 and (c_x+1,c_y) not in hist:
      c_x+=1
      # print('D')

    # right
    elif c_y+1 < c_len and maps[c_x][c_y+1] == 1 and (c_x,c_y+1) not in hist:
      c_y+=1
      # print('R')

    # up
    elif c_x-1 > -1 and maps[c_x-1][c_y] == 1 and (c_x-1,c_y) not in hist:
      c_x-=1
      # print('U')

    # left
    elif c_y-1 > -1 and maps[c_x][c_y-1] == 1 and (c_x,c_y-1) not in hist:
      c_y-=1
      # print('L')

    # print('x,y',c_x,c_y)
    if (c_x,c_y) == prev:
      # print('all block!')
      return result.append(-1)
    else:
      # print('next')
      move_dfs(c_x,c_y,cnt+1,hist)


  move_bfs(0,0,1,[])
  move_dfs(0,0,1,[])

  # print('result', result)
  if sum(result) == -2:
    return -1
  elif result[0] == -1:
    return result[1]
  elif result[1] == -1:
    return result[0]
  else:
    return min(result)


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
