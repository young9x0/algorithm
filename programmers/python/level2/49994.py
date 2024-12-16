def solution(dirs):
  type = [['U','D'],['L','R']]
  move_dict={
    "U":1,
    "D":-1,
    "L":-1,
    "R":1,
  }
  hist=[]
  recur = False

  answer = 0
  cur = [0,0]

  for dir in dirs:
    # print('dir',dir)
    if dir in type[0]:
      if cur[0]==5 or cur[0]==-5:
        continue;
      else:
        cur[0]+=move_dict[dir]
    elif dir in type[1]:
      if cur[1]==5 or cur[1]==-5:
        continue;
      else:
        cur[1]+=move_dict[dir]

    # print('final',cur)
    # print('hist',hist)
    cur_str = ''.join(map(str,cur))
    if cur_str not in hist:
      recur=False
      # print('cur_str',cur_str)
      hist.append(cur_str)
      answer+=1
      # print('answer',answer)
      if recur == True:
        recur = False
    elif recur == False:
      recur = True
      answer+=1

  return answer

# print(solution("ULURRDLLU"))
print(solution("LULLLLLLU"))
# "ULURRDLLU"	7
# "LULLLLLLU"	7
