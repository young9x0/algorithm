def solution(citations):
  citations.sort(reverse=True)
  # print(list(map(min,enumerate(citations,start=1))))

  return max(map(min,enumerate(citations,start=1)))

# print(solution([3, 0, 6, 1, 5]))
# print(solution([0]))
# print(solution([1]))
# print(solution([10000]))
# print(solution([88,89]))
print(solution([46, 328, 8344, 164, 1]))
# [3, 0, 6, 1, 5]	3	3
