def solution(topping):
  a_len=len(topping)
  if a_len == 1:
    return 0

  def check_slice_len(idx):
    # print('idx',topping[:idx], topping[idx:])
    left_set_len= len(set(topping[:idx]))
    right_set_len= len(set(topping[idx:]))
    return left_set_len == right_set_len

  t_set=set(topping)
  t_set_len=len(t_set)
  if t_set_len == 1:
    return a_len-1


  t_set_half_idx= t_set_len//2 + 1
  # print(t_set,'t_set_half_idx', t_set_half_idx)
  tmp=[]
  for type in topping:
    if type in tmp:
      continue

    if len(tmp)<t_set_half_idx:
      tmp.append(type)

  # print('tmp',tmp)

  half_idx_start= len(topping)-1
  while topping[half_idx_start] != tmp[-1]:
    half_idx_start-=1

  answer=0
  # print('half_idx_start',half_idx_start)
  for idx in range(half_idx_start,a_len):
    # print('idx',idx)
    if check_slice_len(idx):
      # print('success')
      answer+=1
    elif idx> half_idx_start:
      break

  return answer

# print(solution([1, 2, 1, 3, 1, 4, 1, 2]))
# print(solution([1, 2, 3, 1, 4]))
# print(solution([1, 2,1, 1, 4]))
# print(solution([1,1,1,1,1]))
print(solution([9997,10000,9998,10000,9998,9997]))
# [1, 2, 1, 3, 1, 4, 1, 2]	2
# [1, 2, 3, 1, 4]	0
