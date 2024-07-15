import re
def solution(dartResult):
  # print(dartResult)
  numReg = re.compile('[0-9]')
  numList = numReg.findall(dartResult)
  # print(numList)
  intList = []
  for idx, num in enumerate(numList):
    if int(num) == 0 and intList[idx-1] == 1:
      intList[idx-1] = 10
    else:
      intList.append(int(num))
  # print(intList)

  exDict= {
    'S':1,
    'D':2,
    'T':3,
  }

  exReg = re.compile('S|D|T')
  exList = exReg.findall(dartResult)
  temp = []

  for int_idx, dart_int in enumerate(intList):
    temp.append(dart_int ** exDict[exList[int_idx]])
  # print('temp',temp)

  strReg = re.compile('[^0-9]')
  strList = strReg.findall(dartResult)
  # print('strList',strList)

  for idx, str in enumerate(strList):
    # print('str', str)
    # print('temp', temp)
    if str == '#':
        if idx == 1:
          temp[0] *= -1
        elif idx == len(strList) -1:
          temp[2] *= -1
        else:
          temp[1] *= -1

    if str == '*':
      if idx == 1:
        temp[0] *=2
      elif idx == len(strList) -1:
        temp[1] *=2
        temp[2] *=2
      else:
        temp[0] *=2
        temp[1] *=2


  # print('final',temp)
  return sum(temp)

# print(solution('1S2D*3T'))
print(solution('1D2S#10S'))
print(solution('1D2S0T'))
print(solution('1S*2T*3S'))
print(solution('1D#2S*3S'))
print(solution('1T2D3D#'))
print(solution('1D2S3T*'))

# 1	1S2D*3T	37	11 * 2 + 22 * 2 + 33
# 2	1D2S#10S	9	12 + 21 * (-1) + 101
# 3	1D2S0T	3	12 + 21 + 03
# 4	1S*2T*3S	23	11 * 2 * 2 + 23 * 2 + 31
# 5	1D#2S*3S	5	12 * (-1) * 2 + 21 * 2 + 31
# 6	1T2D3D#	-4	13 + 22 + 32 * (-1)
# 7	1D2S3T*	59	12 + 21 * 2 + 33 * 2
