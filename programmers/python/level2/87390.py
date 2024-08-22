def solution(n, left, right):
  answer = []
  for row in range(left//n,right//n+1):
    for col in range(n):
      # print('row',row)
      # print('col',col)
      # print('col%n+1',col%n+1)
      answer.append(max(row+1,col%n+1))
  # print('answer',answer)

  except_cnt= (left//n)*n
  return answer[left-(except_cnt):right+1-except_cnt]

print(solution(3,	2,	5))
# print(solution(4,	7,	14))
# 3	2	5	[3,2,2,3]
# 4	7	14	[4,3,3,3,4,4,4,4]
