def solution(X, Y):
  temp = ''
  x_idx = 0

  while len(X) > x_idx and len(Y) > 0:
    if X[x_idx] in Y:
      temp += X[x_idx]
      Y = Y.replace(X[x_idx],'',1)
        # print('Y',Y)
    x_idx += 1

  # print('temp',temp)
  if len(temp) == 0:
    return "-1"
  elif int(temp) == 0:
    return "0"
  else:
    sorted_temp = sorted(temp, reverse=True)
    # print(sorted_temp)
    return ''.join(sorted_temp)


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
