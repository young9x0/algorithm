
def solution(maps):
 tar_y = len(maps)-1
 tar_x = len(maps[0])-1
 pos=[0,0]
 prev_dir=''
 def dfs(y,x):
  nonlocal prev_dir
  # down
  if prev_dir != 'u' and y<tar_y and maps[y+1][x] == 1:
   prev_dir='d'
   return [y+1,x]
  # right
  elif prev_dir != 'l' and x<tar_x and maps[y][x+1] == 1:
   prev_dir='r'
   return [y,x+1]
  # up
  elif prev_dir != 'd' and y>0 and maps[y-1][x] == 1:
   prev_dir='u'
   return [y-1,x]
  # left
  elif prev_dir != 'r' and x>0 and maps[y][x-1] == 1:
   prev_dir='l'
   return [y,x-1]
  else:
   return [-1,-1]

 def bfs(y,x):
  nonlocal prev_dir
  # right
  if prev_dir != 'l' and x<tar_x and maps[y][x+1] == 1:
   prev_dir='r'
   return [y,x+1]
  # down
  elif prev_dir != 'u' and y<tar_y and maps[y+1][x] == 1:
   prev_dir='d'
   return [y+1,x]
  # left
  elif prev_dir != 'r' and x>0 and maps[y][x-1] == 1:
   prev_dir='l'
   return [y,x-1]
  # up
  elif prev_dir != 'd' and y>0 and maps[y-1][x] == 1:
   prev_dir='u'
   return [y-1,x]
  else:
   return [-1,-1]

 cnt=[1,1]

 while pos[0] < tar_y or pos[1] < tar_x:
  # print('-'*50)
  # print('pos', pos)
  res = dfs(pos[0], pos[1])
  # print('res',res)
  if res == [-1,-1] or (pos[0] == tar_y and prev_dir == 'l') or (pos[1] == tar_x and prev_dir == 'u'):
   cnt[0] = (tar_y+1)*(tar_x+1)
   break
  else:
   pos = res
   cnt[0]+=1

 # print('cnt[0]', cnt[0])
 pos=[0,0]
 prev_dir=''
 while pos[0] < tar_y or pos[1] < tar_x:
  # print('-'*50)
  # print('cnt[1]', cnt[1])
  # print('pos', pos)
  # print('prev_dir', prev_dir)
  res = bfs(pos[0], pos[1])
  # print('res',res)
  if res == [-1,-1] or (pos[0] == tar_y and prev_dir == 'l') or (pos[1] == tar_x and prev_dir == 'u') :
   cnt[1] = (tar_y+1)*(tar_x+1)
   break
  else:
   pos = res
   cnt[1]+=1

 # print('cnt[1]', cnt[1])
 if sum(cnt) == (tar_y+1)*(tar_x+1)*2:
  return -1
 return min(cnt)

# print(solution([[1,1,1],[1,1,1],[1,0,0],[1,1,1]])) 6
# print(solution([[1,1,1],[1,0,1],[1,0,1]])) 5
# print(solution([[1,1,0],[1,0,0],[1,1,1]])) 5
# print(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]])) 11
print(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]]))

# [[1,1,1],[1,1,1],[1,0,0],[1,1,1]]	6
# [[1,1,1],[1,0,1],[1,0,1]]	5
# [[1,1,1],[1,0,1],[1,0,1]]	5
# [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]	11
# [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]]	-1
