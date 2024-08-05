def solution(n):
  answer = 1
  for i in range(1,n):
    cnt=0
    for j in range(i,n):
      cnt += j
      if cnt==n:
        answer+=1
        break
      elif cnt > n:
        break
  return answer

# print(solution(15))
print(solution(20))
# 15	4
