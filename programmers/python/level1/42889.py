def solution(N, stages):

  userLen = len(stages)
  dict = {}
  i = 1

  while i <= N:
   dict[i] =[ 0, userLen]
   i+=1


  for  stage in (stages):
    if stage == N+1:
      continue

    else:
      dict[stage][0] += 1


  for key, value in dict.items():
    if key == 1:
      continue
    else:
      dict[key][1] = dict[key-1][1] - dict[key-1][0]

  # print(dict)


  for key, value in dict.items():
    dict[key] = (value[0]/ value[1])

  result = sorted(dict.items(), key= lambda x: x[1], reverse=True)
  # print(result)
  answer = []
  for (key, value) in result:
    answer.append(key)

  return answer

print(solution(5,	[2, 1, 2, 6, 2, 4, 3, 3]))
# print(solution( 4,	[4,4,4,4,4]))
# 5	[2, 1, 2, 6, 2, 4, 3, 3]	[3,4,2,1,5]
# 4	[4,4,4,4,4]	[4,1,2,3]
