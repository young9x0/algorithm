def solution(array):
  print(set(array))
  while len(array) != 0:
    print('start', array)
    for i, a in enumerate(set(array)):
      print('i,a',i, a)
      array.remove(a)
    print('array', array)
    print('i', i)
    if i == 0:
      print('a',a)
      return a

  return -1

# print(solution([1, 2, 3, 3, 3, 4]))
print(solution([1, 1, 2, 2]))
# [1, 2, 3, 3, 3, 4]	3
# [1, 1, 2, 2]	-1
# [1]	1
