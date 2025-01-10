# https://www.daleseo.com/python-heapq/
from heapq import heappop,heappush, heapify
def solution(scoville, K):
  def mix_food(a,b):
    return a + b*2

  answer = 0
  heapify(scoville)
  # print('scoville',scoville)

  while len(scoville) > 1 and scoville[0] < K:
    # print('-'*50)
    # print(scoville[0],'scoville',scoville)
    a=heappop(scoville)
    b=heappop(scoville)
    # print('a,b',a,b)
    mixed=mix_food(a,b)
    answer+=1
    # print('mixed',mixed)
    heappush(scoville,mixed)

  if scoville[0] >= K:
    return answer
  else:

    return -1


# print(solution([1, 2, 3, 9, 10, 12],	7))
# print(solution([6,7,8,1,2,3,5],	118))
print(solution([10,2,7,12,30,14,3,9],	100))
# [1, 2, 3, 9, 10, 12]	7	2
