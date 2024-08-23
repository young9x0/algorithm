def solution(want, number, discount):
  answer = 0
  for idx in range(len(discount)-sum(number)+1):
    wn={key:cnt for key,cnt in zip(want,number)}
    for item in discount[idx:idx+sum(number)]:
      if item not in want:
        break
      else:
        wn[item] -= 1
        if wn[item]<0:
          break

    if set(wn.values()) == {0}:
      answer+=1
  return answer

print(solution(["banana", "apple", "rice", "pork", "pot"],	[3, 2, 2, 2, 1],	["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"]))
# print(solution(["apple"],	[10],	["banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana"]))
# ["banana", "apple", "rice", "pork", "pot"]	[3, 2, 2, 2, 1]	["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"]	3
# ["apple"]	[10]	["banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana"] 0
