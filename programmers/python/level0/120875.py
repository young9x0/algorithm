def solution(dots):
  [x1, y1], [x2, y2], [x3, y3], [x4, y4] = dots


  a= checkGradient( [[x1, y1], [x2, y2]], [[x3, y3], [x4, y4]])
  b= checkGradient( [[x1, y1], [x3, y3]], [[x2, y2], [x4, y4]])
  c= checkGradient( [[x1, y1], [x4, y4]], [[x3, y3], [x2, y2] ])


  if a or b or c:
    return 1
  else:
    return 0


  return answer

def checkGradient(line1, line2):
  [x1, y1], [x2, y2] = line1
  [x3, y3], [x4, y4] = line2

  return ((x2-x1)/(y2-y1)) == ((x4-x3)/(y4-y3))

# print(solution([[1, 4], [9, 2], [3, 8], [11, 6]]))
print(solution([[3, 5], [4, 1], [2, 4], [5, 10]]))

# [[1, 4], [9, 2], [3, 8], [11, 6]]	1
# [[3, 5], [4, 1], [2, 4], [5, 10]]	0
