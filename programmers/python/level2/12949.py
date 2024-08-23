def solution(arr1, arr2):
  answer=[]
  for arr1_row in arr1:
    new_row=[]
    for arr2_col in zip(*arr2):
      print(arr2_col)
      multiple_sum=0
      for a,b in zip(arr1_row, arr2_col):
        print('a',a,'b',b)
        multiple_sum += (a*b)
      new_row.append(multiple_sum)
    answer.append(new_row)
  return answer
  # return [[sum(a*b for a,b in zip(arr1_row, arr2_col)) for arr2_col in zip(*arr2)] for arr1_row in arr1]



# print(solution([[1, 4], [3, 2], [4, 1]],	[[1, 2], [3, 4]]))
# print(solution([[1, 4], [3, 2], [4, 1]],	[[3, 3], [3, 3]]))
print(solution([[1, 2], [3, 4], [5, 6]],	[[1, 2,3,4], [5, 6,7,8]]))
# print(solution([[2, 3, 2], [4, 2, 4], [3, 1, 4]],	[[5, 4, 3], [2, 4, 1], [3, 1, 1]]))
# [[1, 4], [3, 2], [4, 1]],	[[1, 2], [3, 4]]	[[13, 18], [9, 14], [7, 12]]
# [[1, 4], [3, 2], [4, 1]]	[[3, 3], [3, 3]]	[[15, 15], [15, 15], [15, 15]]
# [[2, 3, 2], [4, 2, 4], [3, 1, 4]]	[[5, 4, 3], [2, 4, 1], [3, 1, 1]]	[[22, 22, 11], [36, 28, 18], [29, 20, 14]]
