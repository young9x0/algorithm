def solution(topping):
  a_len=len(topping)
  if a_len == 1:
    return 0

  t_set=set(topping)
  t_set_len=len(t_set)
  if t_set_len == 1:
    return a_len-1

  def check_slice_len(idx):
    # print('idx',topping[:idx], topping[idx:])
    left_set_len= len(set(topping[:idx]))
    right_set_len= len(set(topping[idx:]))
    return left_set_len == right_set_len

  answer=0
  l_idx= a_len//2
  while check_slice_len(l_idx):
        # print('left success', l_idx)
        answer+=1
        l_idx-=1

  r_idx= a_len//2+1
  while check_slice_len(r_idx):
        # print('right success',r_idx)
        answer+=1
        r_idx+=1

  return answer

# print(solution([1, 2, 1, 3, 2, 2, 3, 4]))
# print(solution([1, 2, 1, 3, 1, 4, 1, 2]))
# print(solution([1, 2, 3, 1, 4]))
# print(solution([1, 2, 1, 1, 4]))
# print(solution([1,1,1,1,1]))
print(solution([9997,10000,9998,10000,9998,9997]))
# [1, 2, 1, 3, 1, 4, 1, 2]	2
# [1, 2, 3, 1, 4]	0
