def solution(phone_book):
  hash_map=set(phone_book)
  print('hash_map',hash_map)
  for phone in phone_book:
    temp=''
    for number in phone[:-1]:
      temp+=number
      if temp in hash_map:
        return False
  return True

# print(solution(["119", "97674223", "1195524421"]))
# print(solution(["123","456","789"]))
print(solution(["12","123","1235","567","88"]))
# print(solution(["119","1000","1190","567","88"]))
# print(solution(["118","12","180","567","88"]))
# ["119", "97674223", "1195524421"]	false
# ["123","456","789"]	true
# ["12","123","1235","567","88"]	false
