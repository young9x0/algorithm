def solution(arr):
  return int(arr == list(map(list, zip(*arr))))

print(solution([[5, 192, 33], [192, 72, 95], [33, 95, 999]]))
# 1
print(solution([[19, 498, 258, 587], [63, 93, 7, 754], [258, 7, 1000, 723], [587, 754, 723, 81]]	))
# 0
