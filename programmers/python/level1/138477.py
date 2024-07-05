def solution(k, score):
  answer = []
  temp = []
  for s in score:
    temp.append(s)
    temp.sort()
    # print('temp', temp)
    answer.append(temp[-k:][0])
  return answer

# print(solution(3,	[10, 100, 20, 150, 1, 100, 200]))
print(solution( 4,	[0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]	))

# 3	[10, 100, 20, 150, 1, 100, 200]	[10, 10, 10, 20, 20, 100, 100]
# 4	[0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]	[0, 0, 0, 0, 20, 40, 70, 70, 150, 300]
