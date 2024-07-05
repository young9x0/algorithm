def solution(k, score):
  answer = []
  temp = []
  for s in score:
    temp.append(s)
    print('s',s)
    if (len(temp) > k):
      print('temp', temp)

      print('min(temp)',  min(temp))
      temp.remove( min(temp))
    print('min(temp)',  min(temp))
    answer.append( min(temp))

  return answer

print(solution(3,	[10, 100, 20, 150, 1, 100, 200]))
# print(solution( 4,	[0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]	))

# 3	[10, 100, 20, 150, 1, 100, 200]	[10, 10, 10, 20, 20, 100, 100]
# 4	[0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]	[0, 0, 0, 0, 20, 40, 70, 70, 150, 300]
