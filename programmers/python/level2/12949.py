import numpy as np
def solution(arr1, arr2):
  return (np.matrix(arr1) * np.matrix(arr2)).tolist()

# print(solution([[1, 4], [3, 2], [4, 1]],	[[1, 2], [3, 4]]))
# print(solution([[1, 4], [3, 2], [4, 1]],	[[3, 3], [3, 3]]))
print(solution([[1, 2], [3, 4], [5, 6]],	[[1, 2,3,4], [5, 6,7,8]]))
# print(solution([[2, 3, 2], [4, 2, 4], [3, 1, 4]],	[[5, 4, 3], [2, 4, 1], [3, 1, 1]]))
# [[1, 4], [3, 2], [4, 1]],	[[1, 2], [3, 4]]	[[13, 18], [9, 14], [7, 12]]
# [[1, 4], [3, 2], [4, 1]]	[[3, 3], [3, 3]]	[[15, 15], [15, 15], [15, 15]]
# [[2, 3, 2], [4, 2, 4], [3, 1, 4]]	[[5, 4, 3], [2, 4, 1], [3, 1, 1]]	[[22, 22, 11], [36, 28, 18], [29, 20, 14]]
