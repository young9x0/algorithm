def solution(X, Y):
  answer = ''

  for idx in range(9, -1, -1):
    # print(idx)
    answer += str(idx) * min(X.count(str(idx)), Y.count(str(idx)))

  if answer == '':
    return '-1'
  elif len(answer) == answer.count('0'):
    return '0'
  else:
    return answer



print(solution("100"	,"2345"))
print(solution("100"	,"203045"))
print(solution("100"	,"123450"))
print(solution("12321"	,"42531"))
print(solution("5525"	,"1255"))
# "100"	"2345"	"-1"
# "100"	"203045"	"0"
# "100"	"123450"	"10"
# "12321"	"42531"	"321"
# "5525"	"1255"	"552"
