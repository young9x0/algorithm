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
    'process':['0000'],
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
    cur_mv = prev_str+cur_str
    # print('cur_str',cur_str)
    # print('cur_mv',cur_mv)
    # print('hist',hist)

    if cur_mv not in hist['process']:
      hist['point'].append(cur_str)
      hist['process'].append(cur_mv)
      answer+=1

    prev_str = cur_str
    # print('---answer',answer)

  return answer

# print(solution("ULURRDLLU"))
# print(solution("LULLLLLLU"))
# print(solution("ULDRULDRURDL"))
print(solution("UUUUUURDLUU"))
# "ULURRDLLU"	7
# "LULLLLLLU"	7
# "ULDRULDRURDL"	7
# "UUUUUURDLUU"	8
