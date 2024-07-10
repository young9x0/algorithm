def solution(n, m, section):
  dict = {}
  for sec in section:
    dict[sec] = 0

  answer = 1
  idx = section[0] -1
  for key, val in dict.items():
    # print('key, val', key, val)
    if  val == 1:
      continue
    else:
      # print('idx', idx)
      # print('idx + m', idx + m)
      if idx + m >= key:
        if dict[key] == 0:
          dict[key] = 1
      else:
        # print('next')
        answer+=1
        idx += m

  return answer



# print(solution(8,	4,	[2, 3, 6]))
# print(solution( 5,	4,	[1, 3]))
print(solution( 4,	1,	[1, 2, 3, 4]))
# 8	4	[2, 3, 6]	2
# 5	4	[1, 3]	1
# 4	1	[1, 2, 3, 4]	4
