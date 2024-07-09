import math
def solution(n, m, section):
  section.sort(reverse=True)

  idx = 0
  cnt = 1
  while idx < len(section)-1:
    cnt += section[idx] - section[idx+1]
    idx += 1
  # print(cnt)
  return math.ceil(cnt / m)


print(solution(8,	4,	[2, 3, 6]))
print(solution( 5,	4,	[1, 3]))
print(solution( 4,	1,	[1, 2, 3, 4]))
# 8	4	[2, 3, 6]	2
# 5	4	[1, 3]	1
# 4	1	[1, 2, 3, 4]	4
