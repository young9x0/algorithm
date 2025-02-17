from itertools import combinations
from collections import Counter

def solution(weights):
  answer = 0
  w_counter=Counter(weights)
  # print('w_counter', w_counter)
  for prev, next in combinations(w_counter.keys(), 2):
    prev_dist=[prev*dist for dist in range(2,5)]
    next_dist=[next*dist for dist in range(2,5)]
    if len(set(prev_dist)&set(next_dist))>0:
      answer += w_counter[prev] * w_counter[next]

  for val in w_counter.values():
    if val>1:
      answer += sum([i for i in range(1,val)])

  return answer

# print(solution([100,180,360,100,270]))
# print(solution([350,700,111,255,111,222,355,255]))
# print(solution([1000,250,500,1000,1000,1000,300,400]))
print(solution([100,100,200,200,300]))


# [100,180,360,100,270]	4
# 5