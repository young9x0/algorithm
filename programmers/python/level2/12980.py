def solution(n):
  ans = 1
  while n>1:
    ans += n%2
    n = n//2
  return ans

print(solution(5))
# print(solution(6))
# print(solution(5000))
# print(solution(27))
# 5	2
# 6	2
# 5000	5
