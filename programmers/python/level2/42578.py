def solution(clothes):
  c_dict={item[1]:0 for item in clothes}
  for item in clothes:
    c_dict[item[1]] += 1

  # print((c_dict))
  c_val=list(c_dict.values())
  c_len=len(c_val)

  def make_comb(limit_cnt,comb, result, idx):
    # print('make_comb= limit_cnt,comb,result,idx',limit_cnt,comb,result,idx)
    if limit_cnt == len(comb):
      res=1
      for cnt in comb:
        res*=cnt
      result.append(res)
      comb.pop()
      # print('limit',res)
      if idx == c_len:
        # print('finish',sum(result))
        return sum(result)
      else:
        return make_comb(limit_cnt, comb, result, idx)
    else:
      for next in range(idx, c_len):
        # print('c_val[next]',c_val[next])
        comb.append(c_val[next])

        return make_comb(limit_cnt, comb, result, idx+1)

  answer=0
  for limit_cnt in range(1,c_len+1):
    if limit_cnt == 1:
      answer += sum(c_val)
      # print('limit_cnt=1',answer)
    else:
      for idx in range(c_len):
        if idx+limit_cnt > c_len:
          continue

        copy=[el for el in c_val]
        # print('-'*50)
        # print('limit_cnt',limit_cnt)
        cnt=copy[idx]
        # print('comb',[cnt])
        # print('remain',copy[idx+1:])
        # print('-'*50)
        answer += make_comb(limit_cnt, [cnt], [], idx+1)
  return answer

# print(solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]))
print(solution([["crow_mask", "face"], ["blue_sunglasses", "under"],["blue_sunglasses", "under"], ["smoky_makeup", "upper"],["smoky_makeup", "upper"],["smoky_makeup", "upper"]]))
# print(solution([["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]))
# print(solution([["crow_mask", "coat"], ["blue_sunglasses", "upper"],["smoky_makeup", "under"],["smoky_makeup", "face"], ["smoky_makeup", "face"]]))
# [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]	5
# [["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]	3
