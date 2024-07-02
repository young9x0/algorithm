def solution(lines):
  for l in lines:
    print(min(l), max(l))
  sets = [set(range(min(l), max(l))) for l in lines]
  print(sets)
  one, two, three = sets
  return len(one & two | one & three | two & three)


print(solution([[2, 5], [3, 9], [0, 1]]))
# print(solution([[-1, 1], [1, 3], [3, 9]]))
# print(solution([[0, 5], [3, 9], [1, 10]]))

# [[0, 1], [2, 5], [3, 9]]	2
# [[-1, 1], [1, 3], [3, 9]]	0
# [[0, 5], [3, 9], [1, 10]]	8

