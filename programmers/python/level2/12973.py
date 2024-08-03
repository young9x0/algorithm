def solution(s):
  idx = 0
  temp = s
  while idx+1 < len(temp):
    # print('temp',temp)
    # print('idx',idx)
    if temp[idx] == temp[idx+1]:
      # print('hello')
      temp = temp[:idx] + temp[idx+2:]
      if idx>0:
        idx -= 1
    else:
      idx+=1

  # print(temp)

  return 1 if len(temp) == 0 else 0

# print(solution("baabaa"))
# print(solution("cdcd"))
# baabaa	1
# cdcd	0
