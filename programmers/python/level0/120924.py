def solution(common):
  [fir, sec, thr, *rest] = common
  last = common[len(common)-1]
  minus = sec - fir

  if sec + minus == thr:
    return last + minus
  else:
    return last * (sec/fir)






print(solution([1, 2, 3, 4]))
# print(solution([2, 4, 8]	))
# [1, 2, 3, 4]	5
# [2, 4, 8]	16
