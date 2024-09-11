def solution(phone_book):
  answer = True
  p_len= len(phone_book)
  for pre_idx in range(p_len):
    for check_idx in range(pre_idx+1,p_len):
      if phone_book[pre_idx] in phone_book[check_idx]:
        return False
  return answer

# print(solution(["119", "97674223", "1195524421"]))
# print(solution(["123","456","789"]))
print(solution(["12","123","1235","567","88"]))
# ["119", "97674223", "1195524421"]	false
# ["123","456","789"]	true
# ["12","123","1235","567","88"]	false
