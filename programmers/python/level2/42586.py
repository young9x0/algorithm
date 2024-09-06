import math
def solution(progresses, speeds):
  date_list=[math.ceil((100-progress)/speeds[idx]) for idx,progress in enumerate(progresses)]
  # print(date_list)
  answer = []
  idx=0
  while len(date_list)>idx:
    cnt=1
    for next in range(idx+1,len(date_list)):
      # print('date',idx, date_list[idx])
      # print('next',date_list[next])
      if date_list[idx] >= date_list[next]:
        # print('add')
        cnt+=1
      else:
        # print('break')
        answer.append(cnt)
        idx+=cnt
        break
    else:
      # print('cnt',cnt)
      answer.append(cnt)
      idx+=cnt
    # print('answer',answer)
  return answer

print(solution([90, 90, 90], [1, 5, 4]))
# print(solution([93, 30, 55],	[1, 30, 5]))
# print(solution([95, 90, 99, 99, 80, 99],	[1, 1, 1, 1, 1, 1]))
# [93, 30, 55]	[1, 30, 5]	[2, 1]
# [95, 90, 99, 99, 80, 99]	[1, 1, 1, 1, 1, 1]	[1, 3, 2]
# [90, 90, 90], [1, 5, 4] [3]
