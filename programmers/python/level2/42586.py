import math
def solution(progresses, speeds):
  answer = []
  date_list=[math.ceil((100-progress)/speeds[idx]) for idx,progress in enumerate(progresses)]
  # print(date_list)
  idx=0
  while len(date_list)>idx:
    cnt=1
    # print('date',date_list[idx])
    for next in range(idx+1,len(date_list)):
      # print('next',date_list[next])
      if date_list[idx] >= date_list[next]:
        cnt+=1
        idx+=1
      else:
        answer.append(cnt)
        idx+=1
        break
    else:
      answer.append(cnt)
      idx+=1
    # print('answer',answer)
  return answer

print(solution([93, 30, 55],	[1, 30, 5]))
# print(solution([95, 90, 99, 99, 80, 99],	[1, 1, 1, 1, 1, 1]))
# [93, 30, 55]	[1, 30, 5]	[2, 1]
# [95, 90, 99, 99, 80, 99]	[1, 1, 1, 1, 1, 1]	[1, 3, 2]
