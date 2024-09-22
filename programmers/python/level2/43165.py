def solution(numbers, target):
  answer = 0
  n_len=len(numbers)
  def dfs(temp, idx):
    nonlocal answer
    # print('-'*50)
    # print('temp',temp)
    # print('idx',idx)
    # print('answer',answer)
    # print('test',test)

    if len(temp) == n_len:
      # print('length')
      if sum(temp) == target:
        # print('target')
        answer+=1
        return
    else:
      next_idx=idx+1
      new1 = [num for num in temp]
      new2 = [num for num in temp]
      # print('append', numbers[next_idx])

      new1.append(-numbers[next_idx])
      new2.append(numbers[next_idx])

      dfs(new1, next_idx)
      dfs(new2, next_idx)

  dfs([-numbers[0]],0)
  dfs([numbers[0]],0)
  return answer

#runtime error case
print(solution([1,2,3,4,5,6,7,8,9,10],	10))
# print(solution([1,2,2,1,1,3,2,3,2,2],	2))
# print(solution([1,2,1,2,1,3,1,2,1,2],	3))


# print(solution([1, 1, 1, 1, 1],	3))
# print(solution([4, 1, 2, 1],	4))
# [1, 1, 1, 1, 1]	3	5
# [4, 1, 2, 1]	4	2
