def solution(n):
  answer = 1
  for i in range(1,n):
    cnt=0
    while cnt < n:
      cnt += i
      i+=1
    if cnt == n:
      answer+=1
  return answer

# print(solution(15))
print(solution(20))
# 15	4
