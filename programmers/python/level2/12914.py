def solution(n):
  answer = 0

  def combi(cnt):
    # print('---', cnt, n-cnt*2)
    if cnt == 0 or n-cnt*2 == 0:
     return 1
    multi = 1
    max_cnt = cnt
    min_cnt = n-cnt*2
    if cnt < n-cnt*2:
      max_cnt = n-cnt*2
      min_cnt = cnt
    # print('max', max_cnt)
    # print('min', min_cnt)
    for num in range(max_cnt+1,(max_cnt+min_cnt)+1):
      # print('num', num)
      multi *= num
    for num in range(1,min_cnt+1):
      multi /= num
    # print('multi', multi)
    return int(multi)

  for cnt in range( n//2+1):
    answer += combi(cnt)
    # print('answer', answer)
  return answer % 1234567

# print(solution(7))
print(solution(5))
print(solution(4))
print(solution(3))
# 4	5
# 3	3
