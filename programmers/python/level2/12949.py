def solution(arr1, arr2):
  answer=[]

  arr1_row_len=len(arr1)
  arr1_col_len=len(arr1[0])
  arr2_col_len=len(arr2[0])

  for row in range(arr1_row_len):
    temp=[]
    for col in  range(arr2_col_len):
      temp.append(0)
    answer.append(temp)

  # print(answer)

  for arr1_row_idx in range(arr1_row_len):
    # print('arr1_row_idx',arr1_row_idx)
    for arr1_col_idx in range(arr1_col_len):
      # print('arr1_col_idx',arr1_col_idx)
      for arr2_col_idx in range(arr2_col_len):
        # print('arr2_col_idx',arr2_col_idx)
        # print('arr1[arr1_row_idx][arr1_col_idx]',arr1[arr1_row_idx][arr1_col_idx])
        # print('arr2[arr1_col_idx][arr2_col_idx]',arr2[arr1_col_idx][arr2_col_idx])
        answer[arr1_row_idx][arr2_col_idx] += arr1[arr1_row_idx][arr1_col_idx] * arr2[arr1_col_idx][arr2_col_idx]
    # print('answer',answer)

  return answer

# print(solution([[1, 4], [3, 2], [4, 1]],	[[1, 2], [3, 4]]))
# print(solution([[1, 4], [3, 2], [4, 1]],	[[3, 3], [3, 3]]))
print(solution([[1, 2], [3, 4], [5, 6]],	[[1, 2,3,4], [5, 6,7,8]]))
# print(solution([[2, 3, 2], [4, 2, 4], [3, 1, 4]],	[[5, 4, 3], [2, 4, 1], [3, 1, 1]]))
# [[1, 4], [3, 2], [4, 1]],	[[1, 2], [3, 4]]	[[13, 18], [9, 14], [7, 12]]
# [[1, 4], [3, 2], [4, 1]]	[[3, 3], [3, 3]]	[[15, 15], [15, 15], [15, 15]]
# [[2, 3, 2], [4, 2, 4], [3, 1, 4]]	[[5, 4, 3], [2, 4, 1], [3, 1, 1]]	[[22, 22, 11], [36, 28, 18], [29, 20, 14]]
