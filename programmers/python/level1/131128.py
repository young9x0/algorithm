def solution(X, Y):
  x_list = sorted([int(ch) for ch in X], reverse=True)
  sorted_x = ''.join(map(lambda x: str(x), x_list))
  # print(sorted_x)
  temp = ''
  x_idx = 0
  while len(X) > x_idx and len(Y) > 0:
    if sorted_x[x_idx] in Y:
      temp += sorted_x[x_idx]
      Y = Y.replace(sorted_x[x_idx],'',1)
        # print('Y',Y)
    x_idx += 1

  # print('temp',temp)
  if len(temp) == 0:
    return "-1"
  elif int(temp) == 0:
    return "0"
  else:
    return temp


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
