def solution(common):
  fir, sec, thr = common[:3]
  minus = sec - fir

  if sec + minus == thr:
    return common[-1] + minus
  else:
    return common[-1] * (sec/fir)






print(solution([1, 2, 3, 4]))
# print(solution([2, 4, 8]	))
# [1, 2, 3, 4]	5
# [2, 4, 8]	16
