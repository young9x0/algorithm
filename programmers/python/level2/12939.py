def solution(s):
  t = []
  if s[0] != "-":
    s = "+" + s
  for i in range(0, len(s)):
    t += [s[i]]
  # print(t)
  for i in range(0, len(t)):
    # print(t[i],t[i+1])
    if t[i] == " " and t[i+1] != "-":
      t.insert(i+1, "+")
  # print(t)
  for i in range(1, len(t)):
    if t[len(t)-i] == " " and t[len(t)+1-i] != "-":
      # print(t[len(t)-i],t[len(t)+1-i])
      t.insert(len(t)+1-i, "+")
      break
  # print(t)


  result = []
  midcount1 = ""
  midcount2 = ""
  for i in range(len(t)):
    if t[i] == "-":
      for j in range(i+1, len(t)):
        if t[j] != " ":
          midcount1 = midcount1 + t[j]
          # print('midcount1',midcount1)
          if j == len(t)-1:
            result += [-int(midcount1)]
            # print('1result',result)
            midcount1 = ""
            break
        elif t[j] == " ":
          result += [-int(midcount1)]
          # print('2result',result)
          midcount1 = ""
          break

    elif t[i] == "+":
      for j in range(i+1, len(t)):
        if t[j] != " ":
          midcount2 = midcount2 + t[j]
          if j == len(t)-1:
            result += [int(midcount2)]
            midcount2 = ""
            break
        elif t[j] == " ":
          # print(midcount2)
          result += [int(midcount2)]
          midcount2 = ""
          break

  print(result)
  resultmax = int(result[0])
  resultmin = int(result[0])
  for i in range(len(result)):
    if resultmax < result[i]:
      resultmax = result[i]
  for i in range(len(result)):
    if resultmin > result[i]:
      resultmin = result[i]
  return "%s %s" % (resultmin, resultmax)

print(solution("7 1 9 2 5 8 3 6 4 10"))
# print(solution("1 2 3 4"))
# print(solution("-1 -2 -3 -4"))
# print(solution("-1 -1"))
# "1 2 3 4"	"1 4"
# "-1 -2 -3 -4"	"-4 -1"
# "-1 -1"	"-1 -1"
