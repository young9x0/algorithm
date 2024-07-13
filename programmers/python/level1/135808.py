def solution(k, m, score):
  score.sort(reverse=True)
  # print('score',score)

  answer = 0
  for bLen in range(len(score)//m):
   idx = bLen*m
   # print(bLen,score[idx:idx+m], min(score[idx:idx+m]))
   answer += min(score[idx:idx+m]) * m
  return answer

# print(solution(3,	4,	[1, 2, 3, 1, 2, 3, 1]))
print(solution(4,	3,	[4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]))
# 3	4	[1, 2, 3, 1, 2, 3, 1]	8
# 4	3	[4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]	33
