def solution(citations):
  citations.sort()
  c_dict={key:0 for key in citations}
  for target in citations:
    for other in citations:
      if target <= other:
        c_dict[target] += 1

  answer = c_dict[citations[0]]
  for key,cnt in c_dict.items():
    if key <= cnt and len(citations)-cnt <= key:
      answer = key

  return answer

print(solution([3, 0, 6, 1, 5]))
# print(solution([0]))
# print(solution([1]))
# print(solution([10000]))
# print(solution([88,89]))
# [3, 0, 6, 1, 5]	3	3
