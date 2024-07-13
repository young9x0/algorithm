def solution(lottos, win_nums):
  rank = [6,6,5,4,3,2,1]
  cnt_0 = lottos.count(0)
  answer = 0
  for num in win_nums:
    if num in lottos:
      answer += 1

  return rank[cnt_0+answer], rank[answer]

# print(solution([44, 1, 0, 0, 31, 25],	[31, 10, 45, 1, 6, 19]	))
print(solution( [0, 0, 0, 0, 0, 0],	[38, 19, 20, 40, 15, 25]))
print(solution( [45, 4, 35, 20, 3, 9],	[20, 9, 3, 45, 4, 35]))
# [44, 1, 0, 0, 31, 25]	[31, 10, 45, 1, 6, 19]	[3, 5]
# [0, 0, 0, 0, 0, 0]	[38, 19, 20, 40, 15, 25]	[1, 6]
# [45, 4, 35, 20, 3, 9]	[20, 9, 3, 45, 4, 35]	[1, 1]
