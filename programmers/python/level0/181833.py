def solution( n):
  answer = []
  for i in range(n):
    answer.append([])
    for j in range(n):
      if i == j:
        answer[i].append(1)
      else:
        answer[i].append(0)
  return answer

# print(solution(3))
print(solution(6))
