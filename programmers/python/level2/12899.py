def solution(n):
  def change_num(num, tmp):
    # print('num', num)
    # print('tmp', tmp)

    if num == 0:
      return tmp

    cur = (num%3)
    # print('cur',cur)
    if cur == 0:
      tmp = '4'+tmp
      num-=3
    elif cur == 1:
      tmp = '1'+tmp
    else:
      tmp = '2'+tmp

    return change_num(num//3, tmp)

  answer = change_num(n, '')
  return answer

# print(solution(1))
# print(solution(2))
# print(solution(3))
# print(solution(4))

print(solution(10))
# print(solution(13))
# print(solution(14))
# print(solution(15))

# 1	1
# 2	2
# 3	4
# 4	11