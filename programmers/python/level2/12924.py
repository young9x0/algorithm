def solution(n):
  answer=0
  for i in range(1,n+1):
    if i%2 != 0 and n%i == 0:
      answer +=1
  return answer

print(solution(15))
# print(solution(20))
# 15	4
