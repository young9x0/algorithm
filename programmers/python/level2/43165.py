def solution(numbers, target):
  answer = 0
  hist={idx:[1,1] for idx in range(len(numbers))}
  def dfs(root_idx,node_idx, temp):
    nonlocal answer
    nonlocal hist
    # print('answer',answer)
    # print('hist',hist)
    # print('root_idx',root_idx)
    # print('node_idx',node_idx)
    # print('temp',temp)
    if root_idx == len(numbers):
      # print('answer root_idx',root_idx)
      return answer
    if node_idx == len(numbers):
      # print('last node_idx',node_idx)
      if temp == target:
        answer+=1
      temp=sum(numbers[:root_idx+1])
      return dfs(root_idx+1,root_idx+1,temp)

    # print('node_idx',node_idx, numbers[node_idx], hist[node_idx][0], (temp-numbers[node_idx]) + sum(numbers[node_idx+1:]))
    if hist[node_idx][0] == 1:
      if (temp-numbers[node_idx]) + sum(numbers[node_idx+1:])==target:
        # print('-:same as target')
        answer+=1
        if node_idx == 0 or (node_idx > 0 and sum(hist[node_idx-1]) == 0):
          hist[node_idx][0] = 0
        temp=sum(numbers[:root_idx+1])
        dfs(root_idx,root_idx, temp)
      elif (temp-numbers[node_idx]) + sum(numbers[node_idx+1:])>target:
        # print('-:more than target')
        temp-=numbers[node_idx]
        if node_idx == 0 or (node_idx > 0 and sum(hist[node_idx-1]) == 0):
          hist[node_idx][0] = 0
        dfs(root_idx,node_idx+1, temp)
      else:
        # print('+:block path')
        if node_idx == 0 or (node_idx > 0 and sum(hist[node_idx-1]) == 0):
          hist[node_idx][0]=0
          hist[node_idx][1]=0
        temp+=numbers[node_idx]
        dfs(root_idx,node_idx+1, temp)
    else:
      # print('visited')
      hist[node_idx][1]=0
      temp=sum(numbers[:root_idx+1])
      dfs(root_idx+1,node_idx+1, temp)

  dfs(0, 0,0)
  return answer

print(solution([1, 1, 1, 1, 1],	3))
# print(solution([4, 1, 2, 1],	4))
# [1, 1, 1, 1, 1]	3	5
# [4, 1, 2, 1]	4	2
