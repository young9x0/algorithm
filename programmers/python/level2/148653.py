def solution(storey):
  answer = 0
  def by_decimal(floor):
    nonlocal answer
    # print('-'*50)
    # print('floor',floor)
    # print('answer',answer)

    if floor == 0:
      return answer

    # print('floor%10',floor%10)
    if floor%10 > 5 or (floor%10 == 5  and floor>=10 and int(str(floor)[-2])%10 + 1> 5):
      # print('up')
      answer+=(10-floor%10)
      floor+=(10-floor%10)
    else:
      # print('down')
      answer+=floor%10
      floor-=floor%10

    return by_decimal(floor//10)

  by_decimal(storey)
  return answer

# print(solution(16))
# print(solution(2554))
# print(solution(1))
# print(solution(10105))
print(solution(555))

# 16	6
# 2554	16
# 1
# 7
