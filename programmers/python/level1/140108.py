def solution(s):
  answer = 0
  sList = [ch for ch in s]
  target = sList.pop(0)
  cnt=[1,0]
  while 0 < len(sList):
    # print('1 sList',sList)
    # print('target',target)

    other =sList.pop(0)
    # print('other',other)
    # print('2 sList',sList)
    if target == other:
      cnt[0] += 1

    else:
      cnt[1] += 1

    # print('cnt',cnt)
    if cnt[0] == cnt[1]:
      # print('hello')
      answer += 1
      cnt = [1,0]

      if len(sList) > 0:
        target = sList.pop(0)
      else:
        target = ''
      continue

  # print(target)
  return answer + len(target)

# print(solution("banana"))
# print(solution("abracadabra"))
print(solution("aaabbaccccabba"))
# "banana"	3
# "abracadabra"	6
# "aaabbaccccabba"	3
