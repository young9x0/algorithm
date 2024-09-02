def solution(citations):
  c_dict={key:0 for key in citations}
  for target in citations:
    for other in citations:
      if target <= other:
        c_dict[target] += 1

  # print(c_dict)
  answer = 0
  for key,val in c_dict.items():
    if key == val and answer < val:
      answer = val

  return answer

print(solution([3, 0, 6, 1, 5]))
# [3, 0, 6, 1, 5]	3	3
