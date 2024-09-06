import math
def solution(progresses, speeds):
  print('p',progresses)
  print('s',speeds)
  answer=[]
  time=0
  cnt=0
  while len(progresses)>0:
    print('time',time)
    if(progresses[0] + time*speeds[0]) >= 100:
      progresses.pop(0)
      speeds.pop(0)
      cnt+=1
      print('finish')
    else:
      print('cnt',cnt)
      if cnt>0:
        answer.append(cnt)
        cnt=0
      time+=1
  answer.append(cnt)
  return answer
# print(solution([90, 90, 90], [1, 5, 4]))
print(solution([93, 30, 55],	[1, 30, 5]))
# print(solution([95, 90, 99, 99, 80, 99],	[1, 1, 1, 1, 1, 1]))
# [93, 30, 55]	[1, 30, 5]	[2, 1]
# [95, 90, 99, 99, 80, 99]	[1, 1, 1, 1, 1, 1]	[1, 3, 2]
# [90, 90, 90], [1, 5, 4] [3]
