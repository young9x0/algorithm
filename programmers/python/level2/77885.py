
def solution(numbers):
  answer = []
  # result = 7 & 2
  # print(result)
  #         7 = 0000 0111
  #      &  2 = 0000 0010
  #-----------------------
  # result, 2 = 0000 0010
  for number in numbers:
    # print('number & 1',number & 1)
    if number %2 == 1:
    # if number & 1:
      # 홀수
      target = number
      idx = 0
      while number > 0:
        if number % 2 == 0:
          break
        number //= 2
        idx += 1
      # print('idx',idx)
      answer.append(target + 2 ** (idx) - 2 ** (idx-1))
    else:
      # 짝수
      answer.append(number+1)

  return answer

# print(solution([2,7]))
# print(solution([2]))
print(solution([7]))
# print(solution([11]))
# 14
# print(solution([15]))
# 16
# print(solution([16]))
# 17
# print(solution([17]))
# 18
# print(solution([19]))
# 21
# [3,11]
