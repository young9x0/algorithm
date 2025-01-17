def solution(x,y,n):
  answer = 0
  desc_divided = [3,2]
  min=y-x
  tmp=y-x

  while tmp >= n:
    # print('minus')
    tmp -= n
    answer+=1
  #   print('while answer',answer)
  #
  # print('tmp',tmp)
  if tmp <= 1:
    if tmp == 0:
      min= answer
    tmp=y
    answer = 0


  # print('answer',answer)
  # print('min',min)

  def divide(target, by):
    # print('divide')
    # print('-'*50)
    # print('target',target)
    # print('by',by)

    nonlocal answer
    if target%by>0:
      return target

    answer+=1
    # print('answer',answer)
    return divide(target//by, by)

  for div in desc_divided:
    # print('div',div)
    if tmp % (div*x) == 0:
      tmp = divide(tmp/x,div)
      if min > answer:
        min = answer

  return -1 if tmp >1 and min == y-x else min

# print(solution(10,	40,	5))
# print(solution(10,	40,	30))
print(solution(2,	5,	4))

# 10	40	5	2
# 10	40	30	1
# 2	5	4	-1
