def solution(n, m, section):
  temp = [0]*(n+1)
  for sec in section:
    temp[sec] = 1

  answer = 0
  while sum(temp) > 0:
    for idx in range(section[0], section[-1]+1):
      flag = False
      for lIdx in range(idx, min(idx+m, n+1)):
        # print('temp[lIdx]', temp[lIdx])
        if temp[lIdx] == 1:
          temp[lIdx] = 0
          flag = True

      # print('flag', flag)
      # print('temp', temp)
      if flag:
        answer+=1

  return answer



print(solution(8,	4,	[2, 3, 6]))
# print(solution( 5,	4,	[1, 3]))
# print(solution( 4,	1,	[1, 2, 3, 4]))
# 8	4	[2, 3, 6]	2
# 5	4	[1, 3]	1
# 4	1	[1, 2, 3, 4]	4
