def solution(numbers):
  answer = []
  prev, max=0,0
  idx=0
  n_len=len(numbers)
  # print('n_len',n_len)

  while idx < n_len-1:
    num=numbers[idx]
    if num == max:
      answer.append(-1)
      idx+=1
      continue

    # print(idx,'num',num)
    # print('answer',answer)
    if num == prev:
      # print('prev', answer[-1])
      answer.append(answer[-1])
      idx+=1
      continue

    n_idx=idx+1
    while n_idx < n_len and num >= numbers[n_idx]:
      n_idx+=1

    # print('n_idx',n_idx)
    if n_idx < n_len:
      # print('numbers[n_idx]',numbers[n_idx])
      answer.append(numbers[n_idx])
    else:
      answer.append(-1)
      if max == 0:
        max=num

    prev=num
    idx=idx+1

  answer.append(-1)
  # print(len(answer))
  return answer

print(solution([3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3]))
# print(solution([1,1,9,1,2,5,4,4,3,9,2,2]))
# print(solution([2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,7]))
# print(solution([2, 3, 3, 5]))
# print(solution([9, 1, 5, 3, 6, 2]))
# print(solution([9,9,8,7,6,6,5,6,8,9]))
# [2, 3, 3, 5]	[3, 5, 5, -1]
# [9, 1, 5, 3, 6, 2]	[-1, 5, 6, 6, -1, -1]
