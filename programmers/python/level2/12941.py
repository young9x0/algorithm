def solution(A,B):
  dp=[]
  for aIdx, aVal in enumerate(A):
    dp.append([])
    for bIdx, bVal in enumerate(B):
        dp[aIdx].append(aVal*bVal)
  # print('dp',dp)
  def pick_el(list,temp,cnt):
    # print('-'*50)
    # print('list',list)
    # print('temp',temp)
    cnt += 1
    for row, arr in enumerate(list):
      if sum(arr) != 1*len(list):
        for col, num in enumerate(arr):
          if num != 1:
            # print('num',num)
            temp += num
            for i in range(len(list)):
              list[i][col] = 1
              list[row][i] = 1

            # print('list',list)
            if cnt == len(list):
              # print('finish', temp)
              return temp
            else:
              return pick_el(list, temp, cnt)

  answer = set()
  for row,arr in enumerate(dp):
    for col, multiple in enumerate(arr):
      copy_list = [[copy_num for copy_num in copy_arr]  for copy_arr in dp]
      # print('='*50)
      # print('copy_list',copy_list)
      for i in range(len(copy_list)):
        copy_list[i][col] = 1
        copy_list[row][i] = 1
      # print('start')
      result= pick_el(copy_list, multiple, 1)
      # print('result',result)
      answer.add(result)

  # return answer
  return min(answer)

# print(solution([1, 4, 2],	[5, 4, 4]))
print(solution([1,2],	[3,4]))
# [1, 4, 2]	[5, 4, 4]	29
# [1,2]	[3,4]	10
