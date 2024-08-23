from collections import Counter
def solution(want, number, discount):
  want_dict = {key:number[idx] for idx, key in enumerate(want)}

  answer = 0
  for idx in range(len(discount)-9):
    print(Counter(discount[idx:idx+10]))
    if want_dict == Counter(discount[idx:idx+10]):
      answer+=1
  return answer

print(solution(["banana", "apple", "rice", "pork", "pot"],	[3, 2, 2, 2, 1],	["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"]))
# print(solution(["apple"],	[10],	["banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana"]))
# ["banana", "apple", "rice", "pork", "pot"]	[3, 2, 2, 2, 1]	["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"]	3
# ["apple"]	[10]	["banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana"] 0
