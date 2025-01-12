def solution(skill, skill_trees):
  answer = 0

  for tree in skill_trees:
    # print('-'*50)
    # print('tree',tree)
    t_prev=-1
    s_prev=-1
    cnt=0
    flag=True
    for s_idx, s in enumerate(skill):
      if s in tree:
        t_idx=tree.index(s)
        # print(t_idx,'t_prev', t_prev)
        # print(s_idx,'s_prev', s_prev)
        if t_prev<t_idx and s_idx==s_prev+1:
          t_prev=t_idx
          s_prev=s_idx
        else:
          # print('break!!')
          flag=False
          break
      else:
        cnt+=1

    # print('cnt',cnt)
    # print('s_prev',s_prev)
    # print('t_idx',t_idx)
    if flag and (s_prev>-1 or cnt==len(skill)):
      answer+=1
      # print('answer',answer)

  return answer

print(solution("CBD",	["BACDE", "CBADF", "AECB", "BDA",'UYIOCP']	))
# "CBD"	["BACDE", "CBADF", "AECB", "BDA"]	2
