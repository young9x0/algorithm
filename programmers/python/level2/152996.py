import math

def solution(weights):
  answer = 0
  w_set = set(weights)


  def prime_factorization(num, el_list, idx, prev_div, limit):
    # print('-'*50)
    # print('num',num)
    # print('el_list',el_list)
    if num == 1:
      return

    for div in range(2,limit):
      if num % div == 0:
        if prev_div == div:
          idx+=1
        else:
          idx=0

        el_list.append((idx,div))
        return prime_factorization(num//div, el_list, idx, div, limit)

  pf_dict={weight:[] for weight in w_set}
  for weight in w_set:
    # print('weight:', weight)
    limit = math.ceil(math.sqrt(weight))
    # print('limit',limit)
    prime_factorization(weight, pf_dict[weight],0,0, limit)
  # print('pf_dict',pf_dict)


  comb=[]
  for prev in weights:
    for next in weights:
      if prev < next:
        if (prev,next) not in comb:
          comb.append((prev,next))
      elif prev> next:
        if (next, prev) not in comb:
          comb.append((next,prev))
      else:
        if weights.count(prev) > 1 and (prev, prev) not in comb:
          comb.append((prev,prev))

  # print('comb',comb)
  base_diff=[2,3,4,6,12]
  for fir, sec in comb:
    # print('fir',fir)
    # print('sec',sec)
    if fir == sec:
      answer += 1
      continue
    else:
      f_set= set(pf_dict[fir])
      s_set= set(pf_dict[sec])
      fs_set = (f_set | s_set) - (f_set & s_set)
      # print('fs_set',fs_set)
      diff=1
      for idx, val in fs_set:
        diff *= val

      if diff in base_diff:
        answer += 1

  return answer

# print(solution([100,180,360,100,270]))
print(solution([300,600,200,270,100]))

# [100,180,360,100,270]	4