import collections
def solution(k, tangerine):
  answer=0
  cnt=collections.Counter(tangerine)
  print('cnt',cnt)
  for val in sorted(cnt.values(), reverse=True):
    k-=val
    answer+=1
    if k<=0:
      break
  return answer

print(solution(6,	[1, 3, 2, 5, 4, 5, 2, 3]))
# print(solution(4,	[1, 3, 2, 5, 4, 5, 2, 3]))
# print(solution(2,	[1, 1, 1, 1, 2, 2, 2, 3]))
# 6	[1, 3, 2, 5, 4, 5, 2, 3]	3
# 4	[1, 3, 2, 5, 4, 5, 2, 3]	2
# 2	[1, 1, 1, 1, 2, 2, 2, 3]	1
