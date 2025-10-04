def solution(topping):
  t_len=len(topping)
  # print('t_len', t_len)
  idx = 1
  cnt=0
  while(idx < t_len):
    # print('= idx', idx)
    # print('left:',set(topping[:idx]))
    # print('right:',set(topping[idx:]))

    if len(set(topping[:idx])) == len(set(topping[idx:])):
      cnt+=1
      # print('cnt', cnt)
    idx+=1

  return cnt


# print(solution([1, 2, 1, 3, 1, 4, 1, 2]))
# print(solution([2, 2, 2, 2, 1, 1, 2, 3, 2]))
# print(solution([1, 2, 3, 3, 2, 2, 2, 2, 2, 1]))
# print(solution([1, 2, 2, 2, 2, 2, 3, 3, 2, 1]))
# print(solution([1, 2, 3, 1, 4]))
# print(solution([1, 2, 1, 1, 4]))
print(solution([1,1,1,1,1]))
# print(solution([7,1,8,1,8,7]))
# print(solution([2,4,3,2,4,3,2,8]))
# print(solution([3,2,2,1,1,2,2,3,2,1]))
# print(solution([2,1,1,3,1,3,1,1,1,2,1]))
# print(solution([1,1,4,7,7,5]))
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
