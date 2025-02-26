def solution(arrayA, arrayB):
  def prime_factorization(a_set, b_set):
    t_max =0
    a_min = min(a_set)
    div=a_min
    while div > t_max:
      is_div = True
      for a_num in a_set:
        if a_num % div > 0:
          is_div = False
          break

      if is_div:
        is_not_div = True
        for b_num in b_set:
          if b_num%div == 0:
            is_not_div=False
            break
        if is_not_div and t_max<div:
          t_max=div
      div-=1

    return t_max

  a_set=set(arrayA)
  b_set=set(arrayB)
  a_max=prime_factorization(a_set,b_set)
  b_max=prime_factorization(b_set,a_set)

  return max(a_max, b_max)

# print(solution([10, 17],	[5, 20]))
# print(solution([10, 20],	[5, 17]))
# print(solution([14, 35, 119],	[18, 30, 102]))
print(solution(	[18, 30, 102],[14, 35, 119]))

# [10, 17]	[5, 20]	0
# [10, 20]	[5, 17]	10
# [14, 35, 119]	[18, 30, 102]	7