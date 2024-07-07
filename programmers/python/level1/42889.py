def solution(N, stages):
  result = {}
  userLen = len(stages)
  for stage in range(1,N+1):
    if userLen !=0:
      cnt = stages.count(stage)
      result[stage] = cnt/userLen
      userLen -= cnt
    else:
      result[stage] = 0
  return sorted(result, key= lambda x: result[x], reverse=True)

print(solution(5,	[2, 1, 2, 6, 2, 4, 3, 3]))
# print(solution( 4,	[4,4,4,4,4]))
# 5	[2, 1, 2, 6, 2, 4, 3, 3]	[3,4,2,1,5]
# 4	[4,4,4,4,4]	[4,1,2,3]
