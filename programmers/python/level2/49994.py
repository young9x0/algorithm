def solution(dirs):
  type = [['U','D'],['L','R']]
  move_dict={
    "U":1,
    "D":-1,
    "L":-1,
    "R":1,
  }
  hist= {
    'point':['00'],
    'process':[],
         }

  answer = 0
  cur = [0,0]
  prev_str='00'

  for dir in dirs:
    # print('===dir',dir)
    # print('cur',cur)
    if dir in type[0]:
      if (cur[0]==5 and dir==type[0][0]) or (cur[0]==-5 and dir==type[0][1]):
        continue;
      else:
        cur[0]+=move_dict[dir]
    elif dir in type[1]:
      if (cur[1]==5 and dir==type[1][1]) or (cur[1]==-5 and dir==type[1][0]):
        continue;
      else:
        cur[1]+=move_dict[dir]

    cur_str=''.join(map(str,cur))
    pc_mv = prev_str+cur_str
    cp_mv = cur_str+prev_str
    # print('cur_str',cur_str)
    # print('hist',hist)

    if (pc_mv not in hist['process']) or (cp_mv not in hist['process']):
      hist['process'].append(pc_mv)
      hist['process'].append(cp_mv)
      answer+=1
      if cur_str not in hist['point']:
        hist['point'].append(cur_str)

    prev_str = cur_str
    # print('---answer',answer)

  return answer

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
