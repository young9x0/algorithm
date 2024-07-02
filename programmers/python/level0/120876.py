def solution(lines):
  lines.sort()

  [fir1, fir2], [sec1, sec2], [thr1, thr2] = lines
  fs = [0,0]
  ft = [0,0]
  st = [0,0]

  if fir2 > sec1:
    fs= [sec1, min(fir2, sec2)]

  if fir2 > thr1:
    ft = [thr1, min(fir2, thr2)]

  if sec2 > thr1:
    st = [thr1, min(sec2, thr2)]

  fs1, fs2 = fs
  ft1, ft2 = ft
  st1, st2 = st



  result = []
  makeEl(result, fs1,fs2)
  makeEl(result, ft1,ft2)
  makeEl(result, st1,st2)

  answer= len(set(result))
  if answer == 0:
    return 0
  else:
    return len(set(result))-1

def makeEl(result, min, max):
  if max == 0:
    return result

  num = min
  while num <= max:
    result.append(num)
    num += 1

  return result



# print(solution([[2, 5], [3, 9], [0, 1]]))
# print(solution([[-1, 1], [1, 3], [3, 9]]))
print(solution([[0, 5], [3, 9], [1, 10]]))

# [[0, 1], [2, 5], [3, 9]]	2
# [[-1, 1], [1, 3], [3, 9]]	0
# [[0, 5], [3, 9], [1, 10]]	8

