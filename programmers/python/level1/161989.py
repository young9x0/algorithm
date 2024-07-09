import math
def solution(n, m, section):
  first, *rest, last = section
  # print(first, last)
  sLen = last - first +1
  # print(math.ceil(sLen / m))
  return math.ceil(sLen / m)

print(solution(8,	4,	[2, 3, 6]))
print(solution( 5,	4,	[1, 3]))
print(solution( 4,	1,	[1, 2, 3, 4]))
# 8	4	[2, 3, 6]	2
# 5	4	[1, 3]	1
# 4	1	[1, 2, 3, 4]	4
