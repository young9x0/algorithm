def solution(n):
  target = bin(n).count('1')
  while True:
    n = n+1
    if target == bin(n).count('1'):
      break
  return n

print(solution(78))
# print(solution(15))
# 78	83
# 15	23
