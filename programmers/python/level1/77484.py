def solution(lottos, win_nums):
  zLen = 0
  for num in lottos:
    if num == 0:
      zLen += 1

  lottos.sort()
  # print(zLen)
  lottos = lottos[zLen:]
  # print(lottos)
  win_nums.sort()
  same = 0
  for pick_num in lottos:
    for win_num in win_nums:
      if pick_num == win_num:
        same += 1

  # print(same)

  levels = {
    6:1,
    5:2,
    4:3,
    3:4,
    2:5,
    1:6,
    0:6,
  }

  return [levels[zLen+same], levels[same]]

# print(solution([44, 1, 0, 0, 31, 25],	[31, 10, 45, 1, 6, 19]	))
print(solution( [0, 0, 0, 0, 0, 0],	[38, 19, 20, 40, 15, 25]))
print(solution( [45, 4, 35, 20, 3, 9],	[20, 9, 3, 45, 4, 35]))
# [44, 1, 0, 0, 31, 25]	[31, 10, 45, 1, 6, 19]	[3, 5]
# [0, 0, 0, 0, 0, 0]	[38, 19, 20, 40, 15, 25]	[1, 6]
# [45, 4, 35, 20, 3, 9]	[20, 9, 3, 45, 4, 35]	[1, 1]
