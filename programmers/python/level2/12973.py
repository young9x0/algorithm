def solution(s):
  answer = []

  for ch in s:
    if not(answer):
      answer.append(ch)
    else:
      if answer[-1] == ch:
        answer.pop()
      else:
        answer.append(ch)

  return 1 if len(answer) == 0 else 0
# print(solution("abcdef"))
print(solution("baabaa"))
# print(solution("cdcd"))
# baabaa	1
# cdcd	0
