import math
def solution(arr):
  multiple_arr = 1
  for num in arr:
    multiple_arr *= num

  temp = sorted(arr)
  factor_list = set()
  for num in range(1,math.ceil(temp[0]**(1/2))+1):
    # print('divisor', divisor)
    if temp[0] % num == 0:
      factor_list.add(num)
      factor_list.add(temp[0]//num)

  first_factors = sorted(factor_list)[1:]
  # print('first_factors',first_factors)
  divisor = 1
  for factor in first_factors:
    # print('factor',factor)
    if temp[0] == 1:
      # print('finish')
      break

    new = []
    for num in temp:
      if num % factor == 0:
        new.append(num//factor)
      else:
        break
    # print('new',new)
    if len(new) == len(temp):
      divisor *= factor
  # print('divisor',divisor)
  return multiple_arr // (divisor ** (len(arr)-1))
