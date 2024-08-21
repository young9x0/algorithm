def is_valid(s):
  stack=[]
  for ch in s:
    if not stack:
      stack.append(ch)
    elif stack[-1] == '(':
      if ch == ')' : stack.pop()
      else: stack.append(ch)
    elif stack[-1] == '{':
      if ch == '}' : stack.pop()
      else: stack.append(ch)
    elif stack[-1] == '[':
      if ch == ']' : stack.pop()
      else: stack.append(ch)
  return False if stack else True

def solution(s):
  answer = 0
  for idx in range(len(s)):
    temp = is_valid(s[idx:]+s[:idx])
    print(idx,'temp',temp)
    answer+=temp
  return answer

# print(solution("[](){}"))
print(solution("}]()[{"))
# print(solution("[)(]"))
# print(solution("}}}"))
# print(solution("[))((]"))
# print(solution("[({)[}]]"))
# "[](){}"	3
# "}]()[{"	2
# "[)(]"	0
# "}}}"	0
