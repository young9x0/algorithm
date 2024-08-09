def solution(s):
  st = list()
  for ch in s:
    if ch =='(':
      st.append(ch)
    if ch == ')':
      try:
        st.pop()
      except IndexError:
        return False
  print(st)
  return len(st) == 0

print(solution("()()"))
print(solution("(())()"))
print(solution(")()("))
print(solution("(()("))
# print(solution("(()(()()()()()()()()"))
# "()()"	true
# "(())()"	true
# ")()("	false
# "(()("	false
