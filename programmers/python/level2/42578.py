def solution(clothes):
  c_dict={item[1]:0 for item in clothes}
  for item in clothes:
    c_dict[item[1]] += 1
  sum=0
  multiple=1
  # print(c_dict)
  for val in c_dict.values():
    sum+=val
    multiple*=val
  if len(c_dict) == 1:
    multiple=0
  return sum+multiple

# print(solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]))
print(solution([["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]))
# [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]	5
# [["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]	3
