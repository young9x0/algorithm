def solution(n, m, section):
  answer = 1
  prev = section[0]
  for sec in section:
    if sec - prev >= m:
      prev = sec
      answer += 1

  return answer



# print(solution(8,	4,	[2, 3, 6]))
# print(solution( 5,	4,	[1, 3]))
print(solution( 4,	1,	[1, 2, 3, 4]))
# 8	4	[2, 3, 6]	2
# 5	4	[1, 3]	1
# 4	1	[1, 2, 3, 4]	4
