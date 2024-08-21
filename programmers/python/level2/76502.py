from collections import deque
def check(s):
  while True:
    if "()" in s: s=s.replace("()","")
    elif "{}" in s: s=s.replace("{}","")
    elif "[]" in s: s=s.replace("[]","")
    else:
      print('s',s)
      return False if s else True

def solution(s):
  answer = 0
  que=deque(s)
  for idx in range(len(s)):
    if check(''.join(que)): answer+=1
    que.rotate(-1)
    print('que',que)
  return answer

print(solution("[](){}"))
# print(solution("}]()[{"))
# print(solution("[)(]"))
# print(solution("}}}"))
# print(solution("[))((]"))
# print(solution("[({)[}]]"))
# "[](){}"	3
# "}]()[{"	2
# "[)(]"	0
# "}}}"	0
