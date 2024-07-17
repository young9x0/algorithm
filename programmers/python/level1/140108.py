from collections import deque
def solution(s):
  q = deque(s)
  print(q)
  answer = 0

  print('s',s)
  while q:
    a, b = 1, 0
    print('---q',q)
    target = q.popleft()

    while q:
      other = q.popleft()
      print('target',target)
      print('other',other)
      if target == other:
        a+=1
      else:
        b+=1

      print('a:',a)
      print('b:',b)
      if a == b:
        answer+=1
        break

  return answer

# print(solution("bznako"))
# print(solution("abracadabra"))
print(solution("aaabbaccccabba"))
# "banana"	3
# "abracadabra"	6
# "aaabbaccccabba"	3
