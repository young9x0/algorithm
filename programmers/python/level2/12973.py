def solution(s):
  stack=[]
  for ch in s:
    # print('ch',ch)
    if len(stack) == 0 or stack[-1] != ch:
      stack.append(ch)
    else:
      stack.pop()
    # print('stack', stack)

  return 1 if len(stack) == 0 else 0
# print(solution("abcdef"))
print(solution("baabaa"))
# print(solution("cdcd"))
# baabaa	1
# cdcd	0
