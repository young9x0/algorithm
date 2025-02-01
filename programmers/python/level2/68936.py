def solution(arr):
  answer=[0,0]
  def check(size, x, y):
    print('-'*50)
    print('size',size)
    print('y',y,'x',x)

    if size == 1:
      answer[arr[y][x]] += 1
      return
    else:
      first = arr[y][x]

      for dy in range(size):
        for dx in range(size):
          if first != arr[y+dy][x+dx]:
            check(size//2, x,y)
            check(size//2, x+size//2,y)
            check(size//2, x,y+size//2)
            check(size//2, x+size//2,y+size//2)
            return

      print('all same')
      answer[first]+=1

  check(len(arr),0,0)
  return answer

# print(solution([
#   [1,1,0,0],
#   [1,0,0,0],
#   [1,0,0,1],
#   [1,1,1,1]]))

# print(solution([
# [1,1,1,1,1,1,1,1],
# [0,1,1,1,1,1,1,1],
# [0,0,0,0,1,1,1,1],
# [0,1,0,0,1,1,1,1],
# [0,0,0,0,0,0,1,1],
# [0,0,0,0,0,0,0,1],
# [0,0,0,0,1,0,0,1],
# [0,0,0,0,1,1,1,1]
# ]))

# print(solution([
#   [1]
#  ]))

print(solution([
  [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]
]))



# [[1,1,0,0],[1,0,0,0],[1,0,0,1],[1,1,1,1]]	[4,9]
# [[1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1],[0,0,0,0,1,1,1,1],[0,1,0,0,1,1,1,1],[0,0,0,0,0,0,1,1],[0,0,0,0,0,0,0,1],[0,0,0,0,1,0,0,1],[0,0,0,0,1,1,1,1]]	[10,15]
