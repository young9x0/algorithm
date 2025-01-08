def solution(prices):
  stack = []
  answer = [0] * len(prices)
  for i in range(len(prices)):
    if stack != []:
      while stack != [] and stack[-1][1] > prices[i]:
        past, _ = stack.pop()
        answer[past] = i - past
    stack.append([i, prices[i]])

  print('stack',stack)
  for i, s in stack:
    answer[i] = len(prices) - 1 - i
  return answer

print(solution([1, 2, 3, 2, 3]))
# print(solution([9,4,7,6,5,2,3,8]))
# [1, 2, 3, 2, 3]	[4, 3, 1, 1, 0]
