def solution(dirs):
  s=set()
  d={'U':(0,1), 'D':(0,-1), 'R':(1,0), 'L':(-1,0)}
  x,y=0,0
  for dir in dirs:
    nx, ny = x+d[dir][0] + y+d[dir][1]
    if -5 <= nx <= 5 and -5 <= ny <= 5:
      s.add((x,y,nx,ny))
      s.add((nx,ny,x,y))
      x,y=nx,ny

  return len(s)//2

# print(solution("ULURRDLLU"))
# print(solution("LULLLLLLU"))
# print(solution("ULDRULDRURDL"))
# print(solution("UUUUUURDLUU"))
# print(solution("DDDDDDLURDD"))
print(solution("RLRL"))
# "ULURRDLLU"	7
# "LULLLLLLU"	7
# "ULDRULDRURDL"	7
# "UUUUUURDLUU"	8
