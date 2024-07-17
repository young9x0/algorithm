def solution(s):
  answer = 0
  idx = 0
  cnt = 0

  for index, ch in enumerate(s):
    print('s[idx]',s[idx])
    print('ch',ch)
    cnt += 1 if s[idx] == ch else -1
    print('cnt',cnt)

    if cnt == 0:
      answer+=1
      idx = index +1

  return answer + 1 if cnt else answer

# print(solution("bznako"))
print(solution("abracadabra"))
# print(solution("aaabbaccccabba"))
# "banana"	3
# "abracadabra"	6
# "aaabbaccccabba"	3
