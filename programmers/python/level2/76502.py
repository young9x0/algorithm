def solution(s):
  answer = 0
  def is_pair_bracket(target):
    brackets= {
      'perfect':['[]','{}','()'],
      'front':['[','{','('],
      'back':[']','}',')'],
      'temp':[],
    }
    for ch in target:
      if ch in brackets['front']:
        brackets['temp'].append(ch)
      if ch in brackets['back']:
        if len(brackets['temp']) > 0:
          if brackets['temp'][-1]+ch in brackets['perfect']:
            brackets['temp'].pop()
          else:
            brackets['temp'].append(ch)
        else:
          return False

    # print("brackets['temp']",brackets['temp'])
    return True if len(brackets['temp']) == 0 else False

  for idx in range(0,len(s)):
    # print('temp[idx:]+temp[:idx]',s[idx:],'**',s[:idx])
    temp = s[idx:]+s[:idx]
    # print(idx,'temp',temp)
    res =is_pair_bracket(temp)
    # print('res',res)
    if res:
      answer+=1
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
