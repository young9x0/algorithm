def solution(people, limit):
  saved=[]
  for target_idx, target in enumerate(people):
    for next_idx in range(target_idx+1, len(people)):
      if next_idx in saved:
        continue
      if target + people[next_idx] <= limit:
        saved.append(next_idx)

  # print(saved)
  return len(people) - len(saved)

print(solution([70, 50, 80, 50],	100	))
print(solution([70, 80, 50],	100	))
# [70, 50, 80, 50]	100	3
# [70, 80, 50]	100	3
