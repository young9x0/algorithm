def solution(s):
  answer = 0
  def replace_bracket(ch):
    brackets=['[]','()','{}']
    for bracket in brackets:
      # print('bracket',bracket)
      ch = ch.replace(bracket,'')
      # print('ch')
    if ch in brackets:
      return replace_bracket(ch)
    else:
      return ch

  for idx in range(0,len(s)):
    # print('temp[idx:]+temp[:idx]',s[idx:],'**',s[:idx])
    temp = s[idx:]+s[:idx]
    # print(idx,'temp',temp)
    res =replace_bracket(temp)
    # print('res',res)
    if len(res) ==0:
      answer+=1
  return answer

print(solution("[](){}"))
print(solution("}]()[{"))
print(solution("[)(]"))
print(solution("}}}"))
# "[](){}"	3
# "}]()[{"	2
# "[)(]"	0
# "}}}"	0
