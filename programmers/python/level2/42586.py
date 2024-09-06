from math import ceil
def solution(progresses, speeds):
  daysLeft=list(map(lambda x:ceil((100-progresses[x]) / speeds[x]), range(len(progresses))))
  print(daysLeft)
  cnt=1
  retList=[]

  for idx in range(len(daysLeft)):
    try:
      if daysLeft[idx] < daysLeft[idx+1]:
        retList.append(cnt)
        cnt=1
      else:
        daysLeft[idx+1]=daysLeft[idx]
        cnt+=1
    except IndexError:
      retList.append(cnt)
  return retList
# print(solution([90, 90, 90], [1, 5, 4]))
print(solution([93, 30, 55],	[1, 30, 5]))
# print(solution([95, 90, 99, 99, 80, 99],	[1, 1, 1, 1, 1, 1]))
# [93, 30, 55]	[1, 30, 5]	[2, 1]
# [95, 90, 99, 99, 80, 99]	[1, 1, 1, 1, 1, 1]	[1, 3, 2]
# [90, 90, 90], [1, 5, 4] [3]
