def solution(phone_book):
  phone_book.sort()
  p_len= len(phone_book)
  for pre_idx in range(p_len):
    for check_idx in range(pre_idx+1,p_len):
      pre_len= len(phone_book[pre_idx])
      check_len= len(phone_book[check_idx])
      if pre_len < check_len and phone_book[pre_idx] in phone_book[check_idx][:len(phone_book[pre_idx])]:
        return False
  return True

print(solution(["119", "97674223", "1195524421"]))
# print(solution(["123","456","789"]))
# print(solution(["12","123","1235","567","88"]))
# ["119", "97674223", "1195524421"]	false
# ["123","456","789"]	true
# ["12","123","1235","567","88"]	false
