def solution(dartResult):

  answer = []
  dartResult = dartResult.replace('10','k')
  points = ['10' if str == 'k' else str for str in dartResult]
  print('points', points)
  idx = -1
  sdt = ['S','D','T']
  for point in points:
    print('idx', idx)
    if point in sdt:
      answer[idx] = answer[idx] ** (sdt.index(point) + 1)
      print('answer',answer)
    elif point == '*':
      answer[idx]=answer[idx]*2
      if idx !=0 :
        answer[idx-1] = answer[idx-1]*2
    elif point == '#':
      answer[idx] = answer[idx] * (-1)
    else:
      answer.append(int(point))
      idx += 1

  return sum(answer)
print(solution('1S2D*3T'))
# print(solution('1D2S#10S'))
# print(solution('1D2S0T'))
# print(solution('1S*2T*3S'))
# print(solution('1D#2S*3S'))
# print(solution('1T2D3D#'))
# print(solution('1D2S3T*'))

# 1	1S2D*3T	37	11 * 2 + 22 * 2 + 33
# 2	1D2S#10S	9	12 + 21 * (-1) + 101
# 3	1D2S0T	3	12 + 21 + 03
# 4	1S*2T*3S	23	11 * 2 * 2 + 23 * 2 + 31
# 5	1D#2S*3S	5	12 * (-1) * 2 + 21 * 2 + 31
# 6	1T2D3D#	-4	13 + 22 + 32 * (-1)
# 7	1D2S3T*	59	12 + 21 * 2 + 33 * 2
