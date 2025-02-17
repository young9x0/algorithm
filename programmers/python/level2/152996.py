def solution(weights):
  answer = 0
  sorted_w = sorted(weights)
  # print('sorted_w', sorted_w)
  dup_dict={}
  sorted_len=len(sorted_w)
  pf_dict={weight:set() for weight in weights}
  for weight in weights:
    # print('weight:', weight)
    if len(pf_dict[weight]) == 0:
      dup_dict[weight]=0
      for dist in range(2,5):
        pf_dict[weight].add(weight * dist)

  # print('pf_dict',pf_dict)

  for p_idx in range(sorted_len):
    for n_idx in range(p_idx + 1, sorted_len):
      prev = sorted_w[p_idx]
      next = sorted_w[n_idx]
      # print('-'*50)
      # print('prev, next', prev, next)
      # print('pf_dict[prev] & pf_dict[next]',pf_dict[prev] & pf_dict[next])

      if (prev == next) or (prev*4 >= next*2 and len(pf_dict[prev] & pf_dict[next])>0):
        answer += 1

  return answer

# print(solution([100,180,360,100,270]))
# print(solution([350,700,111,255,111,222,355,255]))
# print(solution([1000,250,500,1000,1000,1000,300,400]))
print(solution([100,100,100,100,100,200]))


# [100,180,360,100,270]	4
# 5