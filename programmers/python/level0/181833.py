# def solution( n):
#   answer=[[0]*n for i in range(n)]
#   for i in range(n):
#     answer[i][i]=1
#   return answer


def solution(n):
  # print(int(False))
  return [[int(i==j) for i in range(n)] for j in range(n)]

print(solution(3))
# print(solution(6))
