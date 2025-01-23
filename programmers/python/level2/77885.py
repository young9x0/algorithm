def f(number):
  bin_num = bin(number)[2:]
  print('bin_num',bin(number),bin_num)

  if '0' not in bin_num:
    print("'10' + bin_num[1:]",'10' + bin_num[1:])
    return int('10' + bin_num[1:], 2)

  bin_num = list(bin_num)
  for i in range(len(bin_num)):
    print('bin_num[-i-1]',bin_num[-i-1])
    if bin_num[-i-1] == '0':
      bin_num[-i-1] = '1'
      break

    if i > 0:
      bin_num[-i] = '0'

    print('bin_num',bin_num)

  return int(''.join(bin_num), 2)


def solution(numbers):
  answer = [f(number) for number in numbers]
  return answer

# print(solution([2,7]))
# print(solution([2]))
# print(solution([7]))
print(solution([11]))
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
