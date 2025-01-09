def solution(scoville, K):
  def mix_food(a,b):
    return a + b*2

  answer = 0
  temp=sorted(scoville)

  while len(temp)>1 and temp[0]<K:
    # print('=temp',temp)
    mixed= mix_food(temp[0],temp[1])
    # print('mixed', mixed)
    answer+=1
    if len(temp)>2:
      temp=temp[2:]
      # print('temp',temp)
      for idx in range(len(temp)):
        if temp[idx] < mixed:
          # print('mixed is bigger')
          if idx == len(temp)-1:
            temp.append(mixed)
          continue
        else:
          # print('insert mixed')
          temp=temp[:idx]+[mixed]+temp[idx:]
          break
    else:
      temp=[mixed]

  if temp[0] < K:
    return -1
  return answer

# print(solution([1, 2, 3, 9, 10, 12],	7))
print(solution([1,2,3,5,6,7,8],	117))
# [1, 2, 3, 9, 10, 12]	7	2
