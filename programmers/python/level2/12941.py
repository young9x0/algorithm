def solution(A,B):
  A.sort()
  B.sort(reverse=True)
  sum=0
  for a, b in zip(A, B):
    sum+= a*b

  # print('sum', sum)
  return sum

# print(solution([1, 4, 2],	[5, 4, 4]))
# print(solution([1, 4, 2],	[5, 4, 3]))
print(solution([1,2],	[3,4]))
# print(solution([2],	[3]))
# [1, 4, 2]	[5, 4, 4]	29
# [1, 4, 2],	[5, 4, 3] 25
# [1,2]	[3,4]	10
