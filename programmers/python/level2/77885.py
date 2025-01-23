def solution(numbers):
  answer = []
  for num in numbers:
    print('xor', num ^ (num+1))
    # 7(0111) ^ 8(1000) = 15(1111)
    print('xor', (num ^ (num+1)) >> 2)
    # 15 // 4 = 3
    answer.append((num ^ (num+1)) >> 2 + num + 1)

  return answer

# print(solution([2,7]))
print(solution([2]))
# print(solution([7]))
# print(solution([11]))
# print(solution([15]))
# print(solution([16]))
# print(solution([17]))
# print(solution([19]))
# [3,11]
