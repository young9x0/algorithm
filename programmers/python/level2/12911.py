def solution(n):
  def make_binary(num,cnt):
    # print('num', num)
    # print('cnt', cnt)
    if num == 1:
      return cnt+1
    if num % 2 == 1:
      cnt += 1
    return make_binary(num//2,cnt)

  target = make_binary(n,0)
  temp=n+1
  cnt = make_binary(temp,0)

  while target != cnt:
    # print('temp', temp)
    # print('cnt', cnt)
    temp+=1
    cnt = make_binary(temp,0)

  return temp

print(solution(78))
# print(solution(15))
# 78	83
# 15	23
