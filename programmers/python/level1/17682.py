import re
def solution(dartResult):
  bonus = {'S':1, 'D':2, 'T':3}
  option = {'':1,'*':2,'#':-1}
  reg = re.compile('([0-9]+)([SDT])([*#]?)')
  dart = reg.findall(dartResult)
  # print('dart',dart)

  for idx in range(len(dart)):
    if dart[idx][2] == '*':
      dart[idx-1] *= 2
      # print('before',dart[idx-1])
    dart[idx] = int(dart[idx][0]) ** bonus[dart[idx][1]] * option[dart[idx][2]]
    # print('after',dart[idx])
    # print('new dart',dart)

  return sum(dart)

# print(solution('1S2D*3T'))
# print(solution('1D2S#10S'))
# print(solution('1D2S0T'))
# print(solution('1S*2T*3S'))
print(solution('1D#2S*3S'))
# print(solution('1T2D3D#'))
print(solution('1D2S3T*'))

# 1	1S2D*3T	37	11 * 2 + 22 * 2 + 33
# 2	1D2S#10S	9	12 + 21 * (-1) + 101
# 3	1D2S0T	3	12 + 21 + 03
# 4	1S*2T*3S	23	11 * 2 * 2 + 23 * 2 + 31
# 5	1D#2S*3S	5	12 * (-1) * 2 + 21 * 2 + 31
# 6	1T2D3D#	-4	13 + 22 + 32 * (-1)
# 7	1D2S3T*	59	12 + 21 * 2 + 33 * 2
