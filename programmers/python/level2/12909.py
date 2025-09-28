def solution(s):
  s_list = list(s)
  # print('s_list:', s_list)
  stack=[]

  for s in s_list:
    # print("s", s)
    # print('stack',stack)
    if len(stack) == 0:
      stack.append(s)
    else:
      if stack[-1] + s == "()":
        stack.pop()
      else:
        stack.append(s)

  # print("stack", stack)
  return True if len(stack) == 0 else False


# print(solution("()()"))
print(solution("(())()"))
print(solution(")()("))
# print(solution("(()("))
# print(solution("(()(()()()()()()()()"))
# "()()"	true
# "(())()"	true
# ")()("	false
# "(()("	false
