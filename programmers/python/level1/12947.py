def solution(x):
  sVal = sum(list(map(int, str(x))))
  return x % sVal == 0


print(solution(10))
print(solution(12))
print(solution(11))
print(solution(13))
# 10	true
# 12	true
# 11	false
# 13	false
