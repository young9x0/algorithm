import math

def solution(weights):
  answer = 0
  w_set = set(weights)

  def prime_factorization(num, el_list, limit):
    # print('-'*50)
    # print('num',num)
    # print('el_list',el_list)
    if num == 1:
      return

    for div in range(2,limit):
      if num % div == 0:
        el_list.append(div)
        return prime_factorization(num//div, el_list, limit)

  pf_dict={weight:[] for weight in w_set}
  for weight in w_set:
    # print('weight:', weight)
    limit = math.ceil(math.sqrt(weight))
    # print('limit',limit)
    prime_factorization(weight, pf_dict[weight], limit)
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

  pf_cnt_dict={}
  for key, val in pf_dict.items():
    pf_cnt_dict[key]={}
    for v_key in set(val):
      pf_cnt_dict[key][v_key] = val.count(v_key)

  # print('1 pf_cnt_dict',pf_cnt_dict)

  for key, val in pf_cnt_dict.items():
    v_key = val.keys()
    if 2 in v_key:
      pf_cnt_dict[key][2]+=2
    else:
      pf_cnt_dict[key][2] = 2

    if 3 in v_key:
      pf_cnt_dict[key][3]+=1
    else:
      pf_cnt_dict[key][3] = 1

  # print('2 pf_cnt_dict',pf_cnt_dict)

  base_key=[2,3]
  for fir, sec in comb:
    if fir == sec:
      answer += 1
      continue
    else:
      f_key = pf_cnt_dict[fir].keys()
      s_key = pf_cnt_dict[sec].keys()
      if len(f_key) != len(s_key):
        continue
      else:
        if abs(pf_cnt_dict[fir][2] - pf_cnt_dict[sec][2]) > 2:
          continue
        elif abs(pf_cnt_dict[fir][3] - pf_cnt_dict[sec][3]) > 1:
          continue
        else:
          for key in f_key:
            if key not in base_key:
              if abs(pf_cnt_dict[fir][key] - pf_cnt_dict[sec][key]) > 0:
                continue
              else:
                answer += 1


  return answer

# print(solution([100,180,360,100,270]))
print(solution([300,600,200,270,100]))

# [100,180,360,100,270]	4