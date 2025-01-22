
def solution(numbers):
  answer = []

  def compared(target, object, diff):
    # print('target, object, diff',target, object, diff)
    if target%2 != object%2:
      # print('diff')
      diff+=1

    if target == 1 and object > 1:
      # print('last target, remain object')
      target = 0

    if object == 1:
      return diff
    else:
      return compared(target//2, object//2, diff)


  for num in numbers:
    min= 100000_00000_00000
    idx=1

    while num+idx < min+1:
      gap = compared(num, num+idx,0)

      if 0 <gap< 3 and min > num+idx:
        min = num+idx
        # print('h min',min)

      idx+=1

    answer.append(min)
  return answer

print(solution([2,7]))
# print(solution([7]))
# [3,11]
