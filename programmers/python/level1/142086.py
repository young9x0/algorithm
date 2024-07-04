def solution(s):
  answer = []
  dict = {}
  for w in s:
    dict[w] = -1

  for idx, word in enumerate(list(s)):
    if dict[word] == -1:
      dict[word] = idx
      answer.append(-1)
    else:
      # print('word,dict[word]',word, dict[word])
      # print('idx',idx)
      answer.append(idx -dict[word])
      dict[word] = idx
  print(dict)

  return answer

# print(solution("banana"))
print(solution("foobar"))

# "banana"	[-1, -1, -1, 2, 2, 2]
# "foobar"	[-1, -1, 1, -1, -1, -1]
