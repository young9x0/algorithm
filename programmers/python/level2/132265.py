def solution(topping):
  cnt = {key:0 for key in topping}

  for type in topping:
    cnt[type]+=1

  k_len=len(cnt.keys())
  t_len=len(topping)

  # print('cnt',cnt)
  # print('k_len',k_len)

  def check_slice_len(idx):
    # print('idx',topping[:idx], topping[idx:])
    cnt1 = {key:0 for key in topping[:idx]}
    cnt2 = {key:0 for key in topping[idx:]}
    return len(cnt1.keys()) == len(cnt2.keys())

  answer=0
  if k_len%2 == 0:
    for idx in range(1,t_len):
      if check_slice_len(idx):
        answer+=1

  return answer

# print(solution([1, 2, 1, 3, 1, 4, 1, 2]))
print(solution([1, 2, 3, 1, 4]))
# [1, 2, 1, 3, 1, 4, 1, 2]	2
# [1, 2, 3, 1, 4]	0
