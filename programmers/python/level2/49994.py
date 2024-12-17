def solution(dirs):
  point = [0,0]
  answer = set()

  for _dirs in dirs:
    print(_dirs)
    if _dirs == 'U' and point[1]!=5:
      point[1]+=1
      nn = (point[0], point[1]-.5)
    elif _dirs == 'D' and point[1]!=-5:
      point[1]+=-1
      nn = (point[0], point[1]+.5)
    elif _dirs == 'R' and point[0]!=5:
      point[0]+=1
      nn = (point[0]-.5, point[1])
    elif _dirs == 'L' and point[0]!=-5:
      point[0]+=-1
      nn = (point[0]+.5, point[1])
    else: pass
    print(nn)
    answer.add(nn)

  return len(answer)

print(solution("ULURRDLLU"))
# print(solution("LULLLLLLU"))
# print(solution("ULDRULDRURDL"))
# print(solution("UUUUUURDLUU"))
# print(solution("DDDDDDLURDD"))
# print(solution("RLRL"))
# "ULURRDLLU"	7
# "LULLLLLLU"	7
# "ULDRULDRURDL"	7
# "UUUUUURDLUU"	8
