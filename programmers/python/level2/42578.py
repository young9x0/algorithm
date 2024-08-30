def solution(clothes):
  c_type={}

  for cloth,type in clothes:
    if type not in c_type:
      c_type[type] = 2
    else:
      c_type[type]+=1
  print('c_type',c_type)
  cnt=1
  for num in c_type.values():
    print('num',num)
    cnt *= num

  return cnt-1

# print(solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]))
print(solution([["crow_mask", "face"],["crow_mask", "face"],["crow_mask", "face"],["crow_mask", "face"], ["blue_sunglasses", "under"],["blue_sunglasses", "under"], ["smoky_makeup", "upper"],["smoky_makeup", "upper"],["smoky_makeup", "upper"],["smoky_makeup", "head"]]))
# print(solution([["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]))
# print(solution([["crow_mask", "coat"], ["blue_sunglasses", "upper"],["smoky_makeup", "under"],["smoky_makeup", "face"], ["smoky_makeup", "face"]]))
# [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]	5
# [["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]	3
# res [2, 6, 24, 8, 3, 12, 4]
# res [6, 24, 8]
# res [12]
# res []
# 119
