from fractions import Fraction
def solution(N, stages):
  answer = []
  fail = []
  info = [0] * (N+2)

  for stage in stages:
    info[stage] += 1
  # print(info)

  for i in range(N):
    be = sum(info[(i+1):])
    yet = info[i+1]
    if be == 0:
      fail.append(((i+1), 0))
    else:
      fail.append(((i+1), Fraction(yet, be)))
  # print(fail)

  for item in sorted(fail, key=lambda x: x[1], reverse=True):
    answer.append(item[0])

  return answer

# print(solution(5,	[2, 1, 2, 6, 2, 4, 3, 3]))
print(solution( 4,	[4,4,4,4,4]))
# 5	[2, 1, 2, 6, 2, 4, 3, 3]	[3,4,2,1,5]
# 4	[4,4,4,4,4]	[4,1,2,3]
