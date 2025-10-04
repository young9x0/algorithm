# H-Index란: https://ssuamje.tistory.com/47, 이 학자가 작성한 논문은 평균적으로 h 이상 인용되고 있다.
def solution(citations):
  cSort= sorted(citations)
  n = len(citations)
  # print('cSort', cSort)
  for idx in range(n):
    print('n-idx',n-idx)
    if cSort[idx] >= n-idx:
      return cSort[idx]

  return 0


# print(solution([3, 0, 6, 1, 5]))
# print(solution([0]))
# print(solution([1]))
# print(solution([10000]))
print(solution([5, 5, 6, 5, 5, 6]))

# [3, 0, 6, 1, 5]	3
# [5, 5, 6, 5, 5, 6] 5
