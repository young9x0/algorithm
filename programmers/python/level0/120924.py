def solution(array):
  [fir, sec, thr, *rest] = array
  last = array[len(array)-1]
  minus = sec - fir

  if sec + minus == thr:
    return last + minus
  else:
    return last * minus






# print(solution([1, 2, 3, 4]))
print(solution([2, 4, 8]	))
# [1, 2, 3, 4]	5
# [2, 4, 8]	16
