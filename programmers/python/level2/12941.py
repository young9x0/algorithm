def solution(A,B):
  return sum(A.pop( A.index(min(A))) * B.pop(B.index(max(B))) for i in range(len(A)))

# print(solution([1, 4, 2],	[5, 4, 3]))
# print(solution([1, 4, 2],	[5, 4, 4]))
print(solution([1,2],	[3,4]))
# print(solution([2],	[3]))
# [1, 4, 2]	[5, 4, 4]	29
# [1,2]	[3,4]	10
