def solution(n):
  num=['1','2','4']
  answer=""

  while n>0:
    n-=1
    answer = num[n%3] + answer
    n//=3

  return answer

print(solution(1))
print(solution(2))
print(solution(3))
print(solution(4))

print(solution(10))
print(solution(13))
print(solution(14))
print(solution(15))

# 1	1
# 2	2
# 3	4
# 4	11