def solution(s):
  zero_cnt=0
  process_cnt=0

  while s != "1":
    zero_cnt += s.count("0")
    process_cnt += 1

    if len(s) > 1:
      new = s.replace("0","")
      # print('new',new)
      s = str('{0:b}'.format(len(new)))
      # print('s',s)

  return [process_cnt,zero_cnt]

# print(solution("110010101001"))
print(solution("01110"))
print(solution("1111111"))
# "110010101001"	[3,8]
# "01110"	[3,3]
# "1111111"	[4,1]
