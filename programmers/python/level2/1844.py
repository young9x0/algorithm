
def solution(maps):
 row_max = len(maps)
 col_max = len(maps[0])

 move_type={
  'l':(0,-1),
  'r':(0,1),
  'd':(1,0),
  'u':(-1,0)
 }

 bfs_visited=[]
 for r in range(row_max):
  temp=[]
  for c in range(col_max):
   temp.append(maps[r][c] == 0)
  bfs_visited.append(temp)
 bfs_visited[0][0]=True

 dfs_visited=[]
 for r in range(row_max):
  temp=[]
  for c in range(col_max):
   temp.append(maps[r][c] == 0)
  dfs_visited.append(temp)
 dfs_visited[0][0]=True

 def check_next(type,y,x, visited):
  (m_y,m_x)=move_type[type]
  return (maps[y+m_y][x+m_x] == 1) and (visited[y+m_y][x+m_x] == False)

 def dfs(y,x, visited):
  res=''

  # down
  if (y<row_max-1) and check_next('d',y,x, visited):
   res='d'

  # right
  elif (x<col_max-1) and check_next('r',y,x, visited):
   res='r'

  # up
  elif y>0 and check_next('u',y,x, visited):
   res='u'

  # left
  elif x>0 and check_next('l',y,x, visited):
   res='l'

  return res

 def bfs(y,x, visited):
  res=''

  # right
  if x<col_max-1 and check_next('r',y,x, visited):
   res='r'

  # down
  elif y<row_max-1 and check_next('d',y,x, visited):
   res='d'

  # left
  elif x>0 and check_next('l',y,x, visited):
   res='l'

  # up
  elif y>0 and check_next('u',y,x, visited):
   res='u'

  return res


 bfs_cur=[0,0]
 cnt=[1,1]
 while (bfs_cur != [row_max-1, col_max-1]):
  res= bfs(bfs_cur[0],bfs_cur[1], bfs_visited)
  # print('bfs cur', bfs_cur)
  # print('bfs cnt', cnt[0])
  # print('bfs_visited', bfs_visited)
  # print('res',res)
  if res:
   y,x=move_type[res]
   bfs_cur[0]+=y
   bfs_cur[1]+=x
   # print('after move bfs cur', bfs_cur)
   bfs_visited[bfs_cur[0]][bfs_cur[1]] = True
   cnt[0]+=1
  else:
   cnt[0]= row_max*col_max
   break

 # print('cnt', cnt)

 dfs_cur=[0,0]
 while (dfs_cur != [row_max-1, col_max-1]):
  res=dfs(dfs_cur[0],dfs_cur[1], dfs_visited)
  # print('dfs dfs_cur', dfs_cur)
  # print('dfs cnt', cnt[1])
  # print('dfs_visited', dfs_visited)
  # print('res',res)
  if res:
   y,x=move_type[res]
   dfs_cur[0]+=y
   dfs_cur[1]+=x
   # print('after move dfs_cur', dfs_cur)
   dfs_visited[dfs_cur[0]][dfs_cur[1]] = True
   cnt[1]+=1
  else:
   cnt[1] = row_max*col_max
   break

 # print('cnt', cnt)
 if sum(cnt) == row_max*col_max*2:
  return -1
 return min(cnt)

# print(solution([[1,1,1],[1,1,1],[1,0,0],[1,1,1]]))
# 6
# print(solution([[1,1,1],[1,0,1],[1,0,1]]))
# 5
# print(solution([[1,1,0],[1,0,0],[1,1,1]]))
# 5
# print(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]))
# 11
print(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]]))

# [[1,1,1],[1,1,1],[1,0,0],[1,1,1]]	6
# [[1,1,1],[1,0,1],[1,0,1]]	5
# [[1,1,1],[1,0,1],[1,0,1]]	5
# [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]	11
# [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]]	-1
