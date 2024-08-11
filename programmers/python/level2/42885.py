def solution(people, limit):
  remain = sorted(people, reverse=True)
  answer = 0
  boat_idx= 0

  while boat_idx < len(remain):
    # print('remain',remain)
    # print('--boat_idx',boat_idx, remain[boat_idx])
    if limit - remain[boat_idx] < 40:
      # print('over')
      boat_idx += 1
      answer += 1
      continue

    for minus_idx in range(1,len(remain)):
      # print('boat_idx',boat_idx, remain[boat_idx])
      # print('minus_idx',-(minus_idx), remain[-(minus_idx)])

      if remain[boat_idx] + remain[-(minus_idx)] <= limit:
        # print('hello')
        boat_idx += 1
        answer+=1
        remain = remain[:-1]
        break
    else:
      answer+=1
      boat_idx+=1
      # print('next')

  return answer

# print(solution([70, 50, 80, 50, 50 ],	100	))
# print(solution([70, 50, 80, 50],	100	))
# print(solution([70, 80, 50],	100	))
print(solution([50, 50, 50, 60, 70, 80, 40],	110	))
# [70, 50, 80, 50]	100	3
# [70, 80, 50]	100	3
