def solution(scoville, K):
  def mix_food(a,b):
    return a + b*2

  answer = 0
  temp=sorted(scoville)
  while temp[0] < K and len(temp)>1:
    # print('temp',temp)
    temp=[mix_food(temp[0],temp[1])] + temp[2:]
    # print('new temp',temp)
    answer+=1
    temp=sorted(temp)

  return answer

print(solution([1, 2, 3, 9, 10, 12],	7))
# print(solution([ 9, 10, 12,1, 2, 3,],	7))
# [1, 2, 3, 9, 10, 12]	7	2
