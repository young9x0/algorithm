def solution(n):
  a,b=0,1
  for i in range(n):
    a,b = b,a+b

  return b % 1000000007

print(solution(4))
print(solution(5))
print(solution(6))
print(solution(7))

