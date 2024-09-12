def solution(phone_book):
  phone_book.sort()
  # print(phone_book)
  p_len= len(phone_book)

  for pre_idx in range(p_len-1):
      pre_len= len(phone_book[pre_idx])
      if phone_book[pre_idx] == phone_book[pre_idx+1][:pre_len]:
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
