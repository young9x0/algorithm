def solution(people, limit):
  answer = 0
  people.sort()
  # print(people)
  in_boat = 0
  need_check= len(people)-1

  while in_boat < need_check:
    print('people[in_boat]',in_boat,people[in_boat])
    print('people[need_check]',need_check,people[need_check])
    if people[need_check] + people[in_boat] <= limit:
      in_boat += 1
      answer += 1
    need_check -= 1
  return len(people)-answer

print(solution([70, 50, 80, 50, 50 ],	100	))
# print(solution([70, 50, 80, 50],	100	))
# print(solution([70, 80, 50],	100	))
# print(solution([50, 50, 50, 60, 70, 80, 40],	100	))
# [70, 50, 80, 50]	100	3
# [70, 80, 50]	100	3
