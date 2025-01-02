def solution(topping):
  t_len=len(topping)
  if t_len == 1:
    return 0
  t_set=set(topping)
  if len(t_set) == 1:
    return t_len-1

  r_set=set()
  l_set=set()
  answer=0
  l_idx=0
  r_idx=t_len-1
  last_same_idx=[0,0]
  while l_idx <= r_idx:
    # print('-'*50)
    # print('l_idx',l_idx,topping[l_idx])
    # print('l_set',l_set)
    # print('r_idx',r_idx,topping[r_idx])
    # print('r_set',r_set)

    if len(l_set)==len(r_set):
      if t_set == l_set:
        answer+=1
        last_same_idx=[l_idx+1,r_idx+2]
      else:
        last_same_idx=[l_idx,r_idx+1]

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
  # print('last_same_idx',last_same_idx)
  def is_same_len(idx):
    # print(idx,'is_same_len',(set(topping[:idx])),(set(topping[idx:])))
    return len(set(topping[:idx]))==len(set(topping[idx:]))

  min, max= last_same_idx
  # print(' min, max', min, max)
  while min<max+1:
    # print('min', min)
    if is_same_len(min):
      answer+=1
    min+=1

  return answer

print(solution([2, 2, 2, 2, 1, 1, 2, 3, 2]))
print(solution([1, 2, 3, 3, 2, 2, 2, 2, 2, 1]))
print(solution([1, 2, 1, 3, 1, 4, 1, 2]))
print(solution([1, 2, 3, 1, 4]))
print(solution([1, 2, 1, 1, 4]))
print(solution([1,1,1,1,1]))
print(solution([7,1,8,1,8,7]))
print(solution([2,4,3,2,4,3,2,8]))
print(solution([3,2,2,1,1,2,2,3,2,1]))
print(solution([2,1,1,3,1,3,1,1,1,2,1]))
print(solution([1,1,4,7,7,5]))
# 2
# 1
# 2
# 0
# 2
# 4
# 1
# 1
# 4
# 2
# 1
