def solution(n, lost, reserve):
  r_dict = {}
  for key in reserve:
    r_dict[key] = 0
  # print(r_dict)

  for num in lost:
    if (num - 1) in reserve:
      r_dict[num-1] = 1

  # print(r_dict)
  # print(sum(r_dict.values()))

  return n- (len(lost) - sum(r_dict.values()))

# print(solution(5,	[2, 4],	[1, 3, 5]))
# print(solution(5,	[2, 4],	[3]))
print(solution(3,	[3],	[1]))
# 5	[2, 4]	[1, 3, 5]	5
# 5	[2, 4]	[3]	4
# 3	[3]	[1]	2
