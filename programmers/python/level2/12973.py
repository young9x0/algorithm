def solution(s):
  temp = ["", s[0]]

  for ch in s[1:]:
    print('ch',ch)
    print('last',temp[-1])
    if temp[-1] != ch:
      temp.append(ch)
    else:
      temp.pop()
    print('temp',temp)

  return 1 if len(temp) == 1 else 0
# print(solution("abcdef"))
print(solution("baabaa"))
# print(solution("cdcd"))
# baabaa	1
# cdcd	0
