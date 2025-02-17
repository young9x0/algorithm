def solution(weights):
  answer = 0
  sorted_set_w = sorted(set(weights))
  # print('sorted_set_w', sorted_set_w)
  dup_dict={}
  sorted_len=len(sorted_set_w)
  pf_dict={weight:set() for weight in weights}
  for weight in weights:
    # print('weight:', weight)
    if len(pf_dict[weight]) == 0:
      dup_dict[weight]=1
      for dist in range(2,5):
        pf_dict[weight].add(weight * dist)
    else:
      dup_dict[weight]+=1

  # print('pf_dict',pf_dict)
  # print('dup_dict',dup_dict)
  for p_idx in range(sorted_len):
    for n_idx in range(p_idx + 1, sorted_len):
      prev = sorted_set_w[p_idx]
      next = sorted_set_w[n_idx]
      # print('-'*50)
      # print('prev, next', prev, next)
      # print('pf_dict[prev] & pf_dict[next]',pf_dict[prev] & pf_dict[next])
      if (prev*4 >= next*2 and len(pf_dict[prev] & pf_dict[next])>0):
        if dup_dict[prev] + dup_dict[next] == 2 :
          answer += 1
        else:
          answer += dup_dict[prev]*dup_dict[next]


  for val in dup_dict.values():
    if val>1:
      answer += ((val-1)*(val))//2
  return answer

# print(solution([100,180,360,100,270]))
# print(solution([350,700,111,255,111,222,355,255]))
# print(solution([1000,250,500,1000,1000,1000,300,400]))
print(solution([100,100,200,200,300]))


# [100,180,360,100,270]	4
# 5