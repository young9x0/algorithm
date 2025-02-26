def solution(arrayA, arrayB):
  def prime_factorization(limit):
    arr = []
    # print('limit', limit)
    for div in range(limit,1,-1):
      # print('div', div)
      if limit % div == 0:
        arr.append(div)

    return arr

  def find_max(a_set, b_set, prev_max, div_arr):
    t_max = prev_max
    idx = 0
    d_len=len(div_arr)

    while idx < d_len and div_arr[idx] > t_max:
      # print('div_arr[idx]', div_arr[idx])
      is_div = True
      for a_num in a_set:
        if a_num % div_arr[idx] > 0:
          is_div = False
          break

      if is_div:
        is_not_div = True
        for b_num in b_set:
          if b_num % div_arr[idx] == 0:
            is_not_div=False
            break

        if is_not_div and t_max<div_arr[idx]:
          t_max = div_arr[idx]

      idx += 1

    return t_max

  a_set=set(arrayA)
  b_set=set(arrayB)

  a_div_arr = prime_factorization(min(a_set))
  # print('a_div_arr', a_div_arr)
  a_max=find_max(a_set,b_set,0, a_div_arr)

  b_div_arr = prime_factorization(min(b_set))
  b_max=find_max(b_set,a_set,a_max, b_div_arr)

  return b_max

print(solution([10, 17],	[5, 20]))
print(solution([10, 20],	[5, 17]))
print(solution([14, 35, 119],	[18, 30, 102]))
print(solution(	[18, 30, 102],[14, 35, 119]))

# [10, 17]	[5, 20]	0
# [10, 20]	[5, 17]	10
# [14, 35, 119]	[18, 30, 102]	7