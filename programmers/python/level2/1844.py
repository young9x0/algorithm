def solution(maps):
  r_len=len(maps)
  c_len=len(maps[0])
  block_type=['LU','UL']

  def move(c_x, c_y, cnt, prev):
    # print('-'*50)
    # print('cnt',cnt, 'x,y',c_x,c_y)
    # print('prev',prev)
    if c_x == c_len-1 and c_y == r_len-1:
      return cnt

    # hist.append((c_x,c_y))
    # print('hist',hist)

    cur=""
    # down
    if  c_x+1 < c_len and maps[c_x+1][c_y] == 1 and prev != 'U':
      c_x+=1
      cur='D'

    # right
    elif c_y+1 < r_len and maps[c_x][c_y+1] == 1 and prev != 'L':
      c_y+=1
      cur='R'

    # up
    elif c_x-1 > -1 and maps[c_x-1][c_y] == 1 and prev != 'D':
      c_x-=1
      cur='U'

    # left
    elif c_y-1 > -1 and maps[c_x][c_y-1] == 1 and prev != 'R':
      c_y-=1
      cur='L'

    # print('x,y',c_x,c_y, 'prev+cur',prev+cur)
    if prev+cur in block_type:
      # print('all block!')
      return -1
    else:
      # print('next')
      return move(c_x,c_y,cnt+1,cur)


  return move(0,0,1,"")

# print(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]))
print(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]]))

# [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]	11
# [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]]	-1
