def solution(n):
  def divide_two(num, cnt):
    # print('-'*50)
    # print('num',num)
    # print('cnt',cnt)
    if num == 1:
      return cnt
    if num%2==1:
      cnt+=1
    return divide_two(num//2, cnt)

  return divide_two(n,1)

# print(solution(5))
# print(solution(6))
# print(solution(5000))
print(solution(27))
# 5	2
# 6	2
# 5000	5
