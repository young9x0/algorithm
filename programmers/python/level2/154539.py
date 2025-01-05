def solution(numbers):
  answer = [-1]*len(numbers)

  for idx in range(len(numbers)-1,-1,-1):
    print('-'*50)
    print('idx',idx, numbers[idx])
    for prev in range(idx-1,-1,-1):
      print('prev',prev, numbers[prev])
      if numbers[prev] >= numbers[idx]: break
      answer[prev] = numbers[idx]
      print('answer',answer)

  return answer

# print(solution([3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3]))
# print(solution([1,1,9,1,2,5,4,4,3,9,2,2]))
# print(solution([2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,7]))
# print(solution([2, 3, 3, 5]))
print(solution([9, 1, 5, 3, 6, 2]))
# print(solution([9,9,8,7,6,6,5,6,8,9]))
# [2, 3, 3, 5]	[3, 5, 5, -1]
# [9, 1, 5, 3, 6, 2]	[-1, 5, 6, 6, -1, -1]
