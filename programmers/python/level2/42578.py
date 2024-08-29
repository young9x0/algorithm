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

  def next_el(temp, next, result):
    # print('temp',temp)
    # print('next',next)

    if next == c_len:
      # print('final',temp)
      # print('result',result)
      return result

    for idx in range(next,c_len):
      comb= [v for v in temp]
      comb.append(c_val[idx])
      # print('comb',comb)
      multiple=1
      for cnt in comb:
        multiple *= cnt
      result.append(multiple)
      # print('result',result)
      next_el(comb, idx+1, result)


  for idx, val in enumerate(c_val):
    res=[]
    next_el([val],idx+1,res)
    # print('res',res)
    answer += sum(res)

  return answer + sum(c_val)

# print(solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]))
# print(solution([["crow_mask", "face"],["crow_mask", "face"],["crow_mask", "face"],["crow_mask", "face"], ["blue_sunglasses", "under"],["blue_sunglasses", "under"], ["smoky_makeup", "upper"],["smoky_makeup", "upper"],["smoky_makeup", "upper"]]))
print(solution([["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]))
# print(solution([["crow_mask", "coat"], ["blue_sunglasses", "upper"],["smoky_makeup", "under"],["smoky_makeup", "face"], ["smoky_makeup", "face"]]))
# [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]	5
# [["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]	3
