
def spliter(arr):
  size = len(arr)//2
  lu = [i[:size] for i in arr[:size]]
  lb = [i[:size] for i in arr[size:]]
  ru = [i[size:] for i in arr[:size]]
  rb = [i[size:] for i in arr[size:]]
  return lu, lb, ru, rb

def ziper(arr):
  print('-'*50)
  size = len(arr)
  print('arr',arr, 'size',size)
  s = sum(sum(i) for i in arr)
  if s == size**2:
    print('one')
    return [1]
  elif s == 0:
    print('zero')
    return [0]
  else:
    lu, lb, ru, rb = spliter(arr)
    return ziper(lu) + ziper(lb) + ziper(ru) + ziper(rb)

def solution(arr):
  zip_res = ziper(arr)
  print('zip_res',zip_res)
  return [len(zip_res) - sum(zip_res), sum(zip_res)]

# print(solution([
#   [1,1,0,0],
#   [1,0,0,0],
#   [1,0,0,1],
#   [1,1,1,1]]))

print(solution([
[1,1,1,1,1,1,1,1],
[0,1,1,1,1,1,1,1],
[0,0,0,0,1,1,1,1],
[0,1,0,0,1,1,1,1],
[0,0,0,0,0,0,1,1],
[0,0,0,0,0,0,0,1],
[0,0,0,0,1,0,0,1],
[0,0,0,0,1,1,1,1]
]))

# print(solution([
#   [1]
#  ]))

# print(solution([
#   [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]
# ]))



# [[1,1,0,0],[1,0,0,0],[1,0,0,1],[1,1,1,1]]	[4,9]
# [[1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1],[0,0,0,0,1,1,1,1],[0,1,0,0,1,1,1,1],[0,0,0,0,0,0,1,1],[0,0,0,0,0,0,0,1],[0,0,0,0,1,0,0,1],[0,0,0,0,1,1,1,1]]	[10,15]
