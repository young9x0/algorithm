def solution(n, left, right):
  answer = []
  for idx in range(left, right+1):
    row, col = divmod(idx,n)
    answer.append(max(row, col)+1)
  return answer

print(solution(3,	2,	5))
# print(solution(4,	7,	14))
# 3	2	5	[3,2,2,3]
# 4	7	14	[4,3,3,3,4,4,4,4]
