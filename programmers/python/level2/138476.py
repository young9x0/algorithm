from collections import Counter
def solution(k, tangerine):
  counter=Counter(tangerine)
  tangerine.sort(key=lambda t:(-counter[t],t))
  print(tangerine)
  return len(set(tangerine[:k]))

print(solution(6,	[1, 3, 2, 5, 4, 5, 2, 3]))
# print(solution(4,	[1, 3, 2, 5, 4, 5, 2, 3]))
# print(solution(2,	[1, 1, 1, 1, 2, 2, 2, 3]))
# 6	[1, 3, 2, 5, 4, 5, 2, 3]	3
# 4	[1, 3, 2, 5, 4, 5, 2, 3]	2
# 2	[1, 1, 1, 1, 2, 2, 2, 3]	1
