def solution(citations):
  citations.sort()
  c_len=len(citations)
  for idx in range(c_len):
    if citations[idx] >= c_len-idx:
      return c_len-idx
  return 0

# print(solution([3, 0, 6, 1, 5]))
# print(solution([0]))
# print(solution([1]))
# print(solution([10000]))
# print(solution([88,89]))
print(solution([46, 328, 8344, 164, 1]))
# [3, 0, 6, 1, 5]	3	3
