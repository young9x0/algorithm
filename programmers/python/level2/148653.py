def solution(storey):
  if storey < 10:
    return min(storey, 11-storey)

  left=storey%10
  return min(left+solution(storey//10), 10 - left + solution(storey//10 + 1))

# print(solution(16))
# print(solution(2554))
# print(solution(1))
# print(solution(10105))
print(solution(555))

# 16	6
# 2554	16
# 1
# 7
