def solution(topping):
  t_len=len(topping)
  if t_len == 1:
    return 0

  r_set=set()
  l_set=set()
  answer=0

  l_idx=0
  r_idx=t_len-1

  while l_idx < r_idx:
    # print('-'*50)
    # print('l_idx',l_idx,topping[l_idx])
    # print('l_set',l_set)
    # print('r_idx',r_idx,topping[r_idx])
    # print('r_set',r_set)

    if len(l_set)==len(r_set):
      if topping[l_idx] not in l_set:
        l_set.add(topping[l_idx])

      if topping[r_idx] not in r_set:
        r_set.add(topping[r_idx])

      l_idx+=1
      r_idx-=1

    elif len(l_set)<len(r_set):
      if topping[l_idx] not in l_set:
        l_set.add(topping[l_idx])
      l_idx+=1

    else:
      if topping[r_idx] not in r_set:
        r_set.add(topping[r_idx])
      r_idx-=1

  # print('='*50)
  # print('l_idx',l_idx,topping[l_idx])
  # print('l_set',l_set)
  # print('r_idx',r_idx,topping[r_idx])
  # print('r_set',r_set)
  def is_same_len(idx):
    # print(idx,'is_same_len',(set(topping[:idx])),(set(topping[idx:])))
    return len(set(topping[:idx]))==len(set(topping[idx:]))
  if len(l_set)==len(r_set):
    if l_idx>r_idx:
      # print('different idx')
      while l_idx<t_len and is_same_len(l_idx):
        answer+=1
        l_idx+=1

      while r_idx>-1 and is_same_len(r_idx):
        answer+=1
        r_idx-=1

    elif l_idx==r_idx:
      # print('same idx')
      if topping[l_idx] in l_set:
       answer+=1
      if topping[r_idx] in r_set:
       answer+=1

  elif len(l_set)<len(r_set):
    if topping[l_idx] not in l_set:
      # print('add left')
      answer+=1

  else:
    if topping[r_idx] not in r_set:
      # print('add right')
      answer+=1

  return answer

# print(solution([2, 2, 2, 2, 1, 1, 2, 3, 2]))
# print(solution([1, 2, 3, 3, 2, 2, 2, 2, 2, 1]))
# print(solution([1, 2, 1, 3, 1, 4, 1, 2]))
# print(solution([1, 2, 3, 1, 4]))
# print(solution([1, 2, 1, 1, 4]))
# print(solution([1,1,1,1,1]))
print(solution([9997,10000,9998,10000,9998,9997]))
# 2
# 1
# 2
# 0
# 2
# 4
# 1
