def solution(s):
  for i in range(len(s)//2):
    s = s.replace('()','',1)
  return len(s) == 0

# print(solution("()()"))
# print(solution("(())()"))
# print(solution(")()("))
print(solution("(()("))
# "()()"	true
# "(())()"	true
# ")()("	false
# "(()("	false
