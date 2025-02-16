def solution(weights):
  answer = 0
  sorted_w_set = sorted(set(weights))
  # print('sorted_w_set', sorted_w_set)
  dup_dict={}
  w_set_len=len(sorted_w_set)
  pf_dict={weight:set() for weight in weights}
  for weight in weights:
    # print('weight:', weight)
    if len(pf_dict[weight]) == 0:
      dup_dict[weight]=0
      for dist in range(2,5):
        pf_dict[weight].add(weight * dist)
    else:
      dup_dict[weight] +=1

  print('pf_dict',pf_dict)

  for p_idx in range(w_set_len):
    for n_idx in range(p_idx + 1, w_set_len):
      prev = sorted_w_set[p_idx]
      next = sorted_w_set[n_idx]
      print('-'*50)
      print('prev, next', prev, next)
      print('pf_dict[prev] & pf_dict[next]',pf_dict[prev] & pf_dict[next])
      if len(pf_dict[prev] & pf_dict[next])>0:
        answer += 1

  print('dup_dict', dup_dict)
  for val in dup_dict.values():
    if val > 0:
      answer += 1
  return answer

# print(solution([100,180,360,100,270]))
# print(solution([350,700,111,255,111,222,355,255]))
# print(solution([1000,250,500,1000,1000,1000,300,400]))
# print(solution([100,100,100,310,500,500,190,270]))
# print(solution([101,202,303,404,505,606,202,303,404]))
print(solution([150,300,350,525,225,125]))

# [100,180,360,100,270]	4
# 5