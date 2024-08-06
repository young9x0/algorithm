def solution(s):
  zero_cnt=0
  process_cnt=0

  while s != "1":
    process_cnt += 1
    one_cnt = s.count("1")
    zero_cnt += len(s) - one_cnt
    s = str('{0:b}'.format(one_cnt))

  return [process_cnt,zero_cnt]

# print(solution("110010101001"))
print(solution("01110"))
print(solution("1111111"))
# "110010101001"	[3,8]
# "01110"	[3,3]
# "1111111"	[4,1]
