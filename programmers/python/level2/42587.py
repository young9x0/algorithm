def solution(priorities, location):
  answer=0
  search,c=sorted(priorities,reverse=True),0
  print('search',search)
  while True:
    for idx, priority in enumerate(priorities):
      s=search[c]
      print('-'*50)
      print('idx, priority',idx, priority)
      print('c',c)
      print('s',s)
      print('priority',priority)
      if priority == s:
        c+=1
        answer+=1
        if idx == location:
          print('find location')
          break
    else:
      print('else')
      continue
    print('break')
    break
  return answer
# print(solution([2, 1, 3, 2],	2))
print(solution([1, 1, 9, 1, 1, 1],	0	))
# [2, 1, 3, 2]	2	1
# [1, 1, 9, 1, 1, 1]	0	5
