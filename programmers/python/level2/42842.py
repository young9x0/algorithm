def solution(brown, yellow):
  for divider in range(1, int(yellow**(1/2))+1):
    if yellow % divider == 0:
      print(yellow//divider)
      if 2*(divider + yellow//divider) == brown-4:
        return [yellow//divider + 2, divider+2]


print(solution(10,2))
print(solution(8,1))
print(solution( 24,	24))
# 10	2	[4, 3]
# 8	1	[3, 3]
# 24	24	[8, 6]
