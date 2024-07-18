def solution(X, Y):
  x_list = sorted([int(str) for str in X], reverse=True)
  y_list = sorted([int(str) for str in Y], reverse=True)
  # print(x_list)
  temp = []
  x_idx = 0
  while len(x_list) > x_idx and len(y_list) > 0:
    # print('x_idx', x_idx)
    # print('y_list', y_list)
    for y_num in y_list:
      if x_list[x_idx] == y_num:
        temp.append(x_list[x_idx])
        y_list.remove(y_num)
    x_idx += 1

  # print(temp)
  if len(temp) == 0:
    return "-1"
  elif sum(temp) == 0:
    return "0"
  else:
    return ''.join(map(lambda x: str(x), temp))


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
