import math
def solution(progresses, speeds):
  Q=[]
  for p, s in zip(progresses,speeds):
    remain=-((p-100)//s)
    print('remain',remain)
    print('Q',Q)
    if len(Q) == 0 or Q[-1][0] < remain:
      Q.append([remain,1])
    else:
      Q[-1][1]+=1
  print('Q',Q)
  return [q[1] for q in Q]

# print(solution([90, 90, 90], [1, 5, 4]))
print(solution([93, 30, 55],	[1, 30, 5]))
# print(solution([95, 90, 99, 99, 80, 99],	[1, 1, 1, 1, 1, 1]))
# [93, 30, 55]	[1, 30, 5]	[2, 1]
# [95, 90, 99, 99, 80, 99]	[1, 1, 1, 1, 1, 1]	[1, 3, 2]
# [90, 90, 90], [1, 5, 4] [3]
