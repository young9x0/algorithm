def solution(people, limit):
  people = sorted(people, reverse=True)
  answer = 0
  boat_idx= 0
  saved=[]
  p_len = len(people)
  while boat_idx < p_len:
    # print('--boat_idx',boat_idx, people[boat_idx])
    if boat_idx in saved:
      boat_idx += 1
      continue

    for minus_idx in range(1,p_len-boat_idx):
      # print('boat_idx',boat_idx, people[boat_idx])
      # print('minus_idx',-(minus_idx), people[-(minus_idx)])
      if p_len-minus_idx in saved:
        continue
      if people[boat_idx] + people[-(minus_idx)] <= limit:
        # print('hello')
        boat_idx += 1
        answer+=1
        saved.append(p_len-minus_idx)
        break
    else:
      answer+=1
      boat_idx+=1
      # print('next')

  return answer

# print(solution([70, 50, 80, 50, 50 ],	100	))
# print(solution([70, 50, 80, 50],	100	))
print(solution([70, 80, 50],	100	))
# print(solution([50, 50, 50, 60, 70, 80, 40],	110	))
# [70, 50, 80, 50]	100	3
# [70, 80, 50]	100	3
