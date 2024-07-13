def solution(k, m, score):
  return sum(sorted(score)[len(score)%m::m])*m

print(solution(3,	4,	[1, 2, 3, 1, 2, 3, 1]))
print(solution(4,	3,	[4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]))
# 3	4	[1, 2, 3, 1, 2, 3, 1]	8
# 4	3	[4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]	33
