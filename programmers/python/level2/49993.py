def solution(skill, skill_trees):
  answer = 0

  for tree in skill_trees:
    print('-'*50)
    skill_list=''

    for t in tree:
      print('tree t',t)
      if t in skill:
        skill_list+=t

    print('skill_list',skill_list)
    if skill_list == skill[0:len(skill_list)]:
      answer+=1
      print('answer',answer)

  return answer

print(solution("CBD",	["BACDE", "CBADF", "AECB", "BDA",'UYIOCP']	))
# "CBD"	["BACDE", "CBADF", "AECB", "BDA"]	2
