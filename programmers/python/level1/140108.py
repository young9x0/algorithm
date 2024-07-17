def solution(s):
  answer = 0
  save1 = 0
  save2 = 0
  print('s',s)
  for ch in s:
    print('---ch',ch)
    print('save1',save1,s[save1])
    print('save2',save2,s[save2])
    if save1 == save2:
      answer += 1
      target = ch

    print('target:', target)
    if ch == target:
      save1 += 1
    else:
      save2 += 1

  return answer

print(solution("bznako"))
# print(solution("abracadabra"))
# print(solution("aaabbaccccabba"))
# "banana"	3
# "abracadabra"	6
# "aaabbaccccabba"	3
