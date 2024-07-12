def solution(answers):
  pattern={
    1:[1,2,3,4,5],
    2:[2,1,2,3,2,4,2,5],
    3:[3,3,1,1,2,2,4,4,5,5]
  }

  score=[0,0,0]

  for key, value in enumerate(score):
    for idx, answer in enumerate(answers):
      if (answer ==  pattern[key+1][idx % len(pattern[key+1])]):
        score[key] += 1

  # print('score', score)

  result = []
  for idx, value in enumerate(score):
      if value == max(score):
        result.append(idx+1)


  return result

print(solution([1,2,3,4,5, 1,2,3,4,5]))
# print(solution([1,3,2,4,2, 2,4,4]))
# [1,2,3,4,5]	[1]
# [1,3,2,4,2]	[1,2,3]
