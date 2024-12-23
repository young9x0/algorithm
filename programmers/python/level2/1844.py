def solution(maps):
  r_len=len(maps)
  c_len=len(maps[0])
  hist=[]

  def move(c_x,c_y,cnt):
    # print('-'*50)
    # print('cnt',cnt, 'x,y',c_x,c_y)
    if c_x == c_len-1 and c_y == r_len-1:
      return cnt

    hist.append((c_x,c_y))
    # print('hist',hist)

    prev=(c_x,c_y)
    # down
    if  c_x+1 < c_len and maps[c_x+1][c_y] == 1 and (c_x+1,c_y) not in hist:
      # print('down')
      c_x+=1

    # right
    elif c_y+1 < r_len and maps[c_x][c_y+1] == 1 and (c_x,c_y+1) not in hist:
      # print('right')
      c_y+=1

    # up
    elif c_x-1 > -1 and maps[c_x-1][c_y] == 1 and (c_x-1,c_y) not in hist:
      # print('up')
      c_x-=1

    # left
    elif c_y-1 > -1 and maps[c_x][c_y-1] == 1 and (c_x,c_y-1) not in hist:
      # print('left')
      c_y-=1

    # print('x,y',c_x,c_y)
    if (c_x,c_y) == prev:
      # print('all block!')
      return -1
    else:
      # print('next')
      return move(c_x,c_y,cnt+1)


  return move(0,0,1)

print(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]))
# print(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]]))

# [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]	11
# [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]]	-1
