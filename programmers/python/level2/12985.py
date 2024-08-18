import math
def solution(n,a,b):
  def next_num(num):
    return math.ceil(num/2)

  def check_cnt(a,b,cnt):
    # print('cnt',cnt)
    new_a= next_num(a)
    new_b= next_num(b)
    # print('new_a', new_a)
    # print('new_b', new_b)
    if new_a == new_b:
      # print('hello')
      return cnt
    else:
      cnt+=1
      return check_cnt(new_a,new_b,cnt)

  return check_cnt(a,b,1)

print(solution(8,	4,	7))
# 8	4	7	3
