def solution(want, number, discount):
  want_dict = {key:number[idx] for idx, key in enumerate(want)}

  idx=0
  answer = 0
  while idx+10 < len(discount)+1:
    cart_dict={key:cnt for key,cnt in want_dict.items()}
    # print(cart_dict)
    # print('discount[idx:idx+10]',discount[idx:idx+10])
    for item in discount[idx:idx+10]:
      if item in want and cart_dict[item]>0:
        cart_dict[item] -= 1
    # print(cart_dict)
    if sum(cart_dict.values()) == 0:
      answer+=1
    idx+=1
  return answer

# print(solution(["banana", "apple", "rice", "pork", "pot"],	[3, 2, 2, 2, 1],	["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"]))
print(solution(["apple"],	[10],	["banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana"]))
# ["banana", "apple", "rice", "pork", "pot"]	[3, 2, 2, 2, 1]	["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"]	3
# ["apple"]	[10]	["banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana"] 0
