# H-Index란: https://ssuamje.tistory.com/47
def solution(citations):
  sorted_citations= sorted(citations, reverse=True)
  c_len=len(sorted_citations)
  for idx in range(c_len):
    if sorted_citations[idx] <= idx:
      return idx
  return c_len

# print(solution([3, 0, 6, 1, 5]))
# print(solution([0]))
# print(solution([1]))
# print(solution([10000]))
# print(solution([88,89]))
print(solution([46, 328, 8344, 164, 1]))
# print(solution([0,1,2,3,3,3,3,3,3,4,10,20,30,40]))
# [3, 0, 6, 1, 5]	3	3
