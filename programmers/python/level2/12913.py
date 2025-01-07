def solution(land):
  for row in range(1,len(land)):
    for col in range(len(land[0])):
      land[row][col]=max(land[row-1][:col]+land[row-1][col+1:])+land[row][col]

  return max(land[-1])

print(solution([[1, 1, 3, 1], [2, 3, 2, 2], [1, 4, 1, 1]]))
# print(solution([[6, 7, 1, 2], [2, 3, 10, 8], [1, 3, 9, 4], [7, 11, 4, 9]]))
# print(solution([[1,4,8,9],[1,8,2,10],[5,2,1,99],[7,8,1,100]]))
# [[1,2,3,5],[5,6,7,8],[4,3,2,1]]	16
