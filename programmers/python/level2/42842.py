def solution(brown, yellow):
  def find_divider_list(num):
    result = set()
    for divider in range(1,num+1):
      if num % divider == 0:
        result.add(divider)
    return result

  yellow_set= find_divider_list(yellow)
  yellow_list = sorted(list(yellow_set))
  # print(yellow_list)
  yellow_length = len(yellow_set)
  for idx in range(yellow_length//2,yellow_length):
    width= (yellow_list[idx])
    height=int((yellow/yellow_list[idx]))
    if brown == ((width + 2) + height)*2:
      # print('hello')
      return [width+ 2, height+2]


print(solution(10,2))
print(solution(8,1))
# print(solution( 24,	24))
# 10	2	[4, 3]
# 8	1	[3, 3]
# 24	24	[8, 6]
