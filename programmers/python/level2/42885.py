def solution(people, limit):
  answer = 0
  boat_idx= 0
  saved=[]
  p_len = len(people)
  while p_len-1> boat_idx:
    # print('-'*50)
    # print('boat_idx',boat_idx)
    # print('saved',saved)
    for remain_idx in range(boat_idx+1,p_len):
      # print('remain_idx',remain_idx)
      if remain_idx in saved:
        if remain_idx == p_len - 1:
          # print('finish')
          answer += 1
          boat_idx += 1
        continue
      if people[boat_idx] + people[remain_idx] <= limit:
        # print('hello')
        answer += 1
        boat_idx += 1
        saved.append(remain_idx)
        continue
      if remain_idx == p_len - 1:
        # print('finish')
        answer += 1
        boat_idx += 1

  return answer + 1 - len(saved)

print(solution([70, 50, 80, 50],	100	))
# print(solution([70, 80, 50],	100	))
# [70, 50, 80, 50]	100	3
# [70, 80, 50]	100	3
