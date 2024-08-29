def solution(clothes):
  c_dict={item[1]:0 for item in clothes}
  for item in clothes:
    c_dict[item[1]] += 1

  # print(c_dict)
  c_val=list(c_dict.values())
  # print(c_val)
  # c_val=[1,2,3,4]
  c_len=len(c_val)
  answer=0

  def next_el(multiple, next, result):
    # print('temp',temp)
    # print('next',next)

    if next == c_len:
      # print('final', multiple)
      # print('result',result)
      return result

    for idx in range(next,c_len):
      # comb= [v for v in temp]
      # comb.append(c_val[idx])
      # print('comb',comb)
      # res=1
      # for cnt in comb:
      #   res *= cnt
      # result.append(res)
      result.append(multiple*c_val[idx])
      # print('prev',multiple*c_val[idx])
      next_el(multiple*c_val[idx], idx+1, result)


  for idx, val in enumerate(c_val):
    res=[]
    # next_el([val],idx+1,res)
    next_el(val,idx+1,res)
    # print('res',res)
    answer += sum(res)

  return answer + sum(c_val)

# print(solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]))
# print(solution([["crow_mask", "face"],["crow_mask", "face"],["crow_mask", "face"],["crow_mask", "face"], ["blue_sunglasses", "under"],["blue_sunglasses", "under"], ["smoky_makeup", "upper"],["smoky_makeup", "upper"],["smoky_makeup", "upper"]]))
print(solution([["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]))
# print(solution([["crow_mask", "coat"], ["blue_sunglasses", "upper"],["smoky_makeup", "under"],["smoky_makeup", "face"], ["smoky_makeup", "face"]]))
# [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]	5
# [["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]	3
# res [2, 6, 24, 8, 3, 12, 4]
# res [6, 24, 8]
# res [12]
# res []
# 119
