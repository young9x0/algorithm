def solution(numbers):
  stack=[]
  answer = [-1]*len(numbers)

  for idx in range(len(numbers)):
    print('-'*50)
    print('idx',idx)
    # if stack:
    #   print('test')
    print('stack',stack)
    while stack and numbers[stack[-1]] < numbers[idx]:
      print('numbers[stack[-1]]',numbers[stack[-1]])
      answer[stack.pop()]=numbers[idx]

    stack.append(idx)
  return answer

# print(solution([3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3]))
# print(solution([1,1,9,1,2,5,4,4,3,9,2,2]))
# print(solution([2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,7]))
# print(solution([2, 3, 3, 5]))
print(solution([9, 1, 5, 3, 6, 2]))
# print(solution([9,9,8,7,6,6,5,6,8,9]))
# [2, 3, 3, 5]	[3, 5, 5, -1]
# [9, 1, 5, 3, 6, 2]	[-1, 5, 6, 6, -1, -1]
