def solution(skill, skill_trees):
  answer = 0

  for tree in skill_trees:
    print('-'*50)
    skill_list=list(skill)

    for t in tree:
      print('tree t',t)
      if t in skill:
        s=skill_list.pop(0)
        print('skill s',s)
        if t != s:
          print('break!!')
          break
    else:
      answer+=1
      print('answer',answer)

  return answer

print(solution("CBD",	["BACDE", "CBADF", "AECB", "BDA",'UYIOCP']	))
# "CBD"	["BACDE", "CBADF", "AECB", "BDA"]	2
