def solution(s):
  answer = []
  dic = dict()
  print(dic)
  for i in range(len(s)):
    if s[i] not in dic:
      answer.append(-1)
    else:
      print(i,dic[s[i]] )
      answer.append(i - dic[s[i]])

    dic[s[i]] = i

  return answer

print(solution("banana"))
# print(solution("foobar"))

# "banana"	[-1, -1, -1, 2, 2, 2]
# "foobar"	[-1, -1, 1, -1, -1, -1]
