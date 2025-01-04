def solution(numbers):
  answer = []
  n_len=len(numbers)

  for idx,number in enumerate(numbers):
    # print(idx,'number',number)
    # print('hist',hist)

    n_idx=idx+1
    while n_idx<n_len and number >= numbers[n_idx]:
     n_idx+=1

    if n_idx < n_len:
      # print('numbers[n_idx]',numbers[n_idx])
      answer.append(numbers[n_idx])

    else:
      answer.append(-1)


  return answer

# print(solution([2, 3, 3, 5]))
print(solution([9, 1, 5, 3, 6, 2]))
# [2, 3, 3, 5]	[3, 5, 5, -1]
# [9, 1, 5, 3, 6, 2]	[-1, 5, 6, 6, -1, -1]
