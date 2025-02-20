def solution(arrayA, arrayB):
  def prime_factorization(num):
    factors=set()
    for div in range(2, num):
      if num % div == 0:
        factors.add(div)

    return factors

  a_gcd_list=[]
  for num in set(arrayA):
    factors=prime_factorization(num)
    # print('num',num)
    # print('factors',factors)
    factors.add(num)
    a_gcd_list.append(factors)

  # print('a_gcd_list',a_gcd_list)
  a_common_set=a_gcd_list[0]
  a_len=len(a_gcd_list)
  for idx in range(1,a_len):
    a_common_set=a_common_set&a_gcd_list[idx]

  # print('a_common_set',a_common_set)
  b_gcd_list=[]
  for num in set(arrayB):
    factors=prime_factorization(num)
    # print('num',num)
    # print('factors',factors)
    factors.add(num)
    b_gcd_list.append(factors)

  # print('b_gcd_list',b_gcd_list)
  b_common_set = b_gcd_list[0]
  b_len = len(b_gcd_list)
  for idx in range(1, b_len):
    # print(' b_gcd_list[idx]',b_common_set &  b_gcd_list[idx])
    b_common_set = b_common_set & b_gcd_list[idx]

  for gcd in b_gcd_list:
    a_common_set = a_common_set - gcd

  for gcd in a_gcd_list:
    b_common_set = b_common_set - gcd

  # print('a_common_set', a_common_set)
  # print('b_common_set', b_common_set)

  answer=0
  if len(a_common_set)>0:
    a_max= max(a_common_set)
    if answer< a_max:
      answer= a_max

  if len(b_common_set)>0:
    b_max = max(b_common_set)
    if answer < b_max:
      answer = b_max

  return answer

print(solution([10, 17],	[5, 20]))
print(solution([10, 20],	[5, 17]))
print(solution([14, 35, 119],	[18, 30, 102]))

# [10, 17]	[5, 20]	0
# [10, 20]	[5, 17]	10
# [14, 35, 119]	[18, 30, 102]	7