import re
from collections import deque
def solution(str1, str2):
  striped1 = str1.strip()
  striped2 = str2.strip()
  if len(striped1) + len(striped2) == 0:
    return 1

  str1_list = re.split('[^a-z]',str1.lower())
  str2_list = re.split('[^a-z]',str2.lower())
  # print('str1_list',str1_list)
  # print('str2_list',str2_list)

  multi_1=deque()

  for str in str1_list:
    if str == '':
      continue
    else:
      for idx in range(len(str)-1):
        multi_1.append(str[idx]+str[idx+1])

  multi_2=deque()
  for str in str2_list:
    if str == '':
      continue
    else:
      for idx in range(len(str)-1):
        multi_2.append(str[idx]+str[idx+1])



  intersection_len=0
  for idx1, mstr1 in enumerate(multi_1):
    # print('mstr1',mstr1)
    idx2=0
    while idx1 < len(multi_1) or len(multi_2)>0:
        if idx2 == len(multi_2):
          break
        elif mstr1 == multi_2[idx2]:
          # print('mstr2',multi_2[idx2])
          multi_2.remove(multi_2[idx2])
          intersection_len+=1
          break
        else:
          idx2+=1
  # print('intersection',intersection_len,'multi',multi_1,multi_2)
  union_len=len(multi_1)+len(multi_2)
  # print('inter uni',intersection_len, union_len, (intersection_len/union_len))
  return int((1 if union_len == 0 else (intersection_len/union_len) )* 65536)
#
# print(solution("FRANCE",	"french"))
# print(solution("handshake",	"shake hands"))
# print(solution("aa1+aa2",	"AAAA12"))
# print(solution("  ",	"  "))
# print(solution("E=M*C^2",	"e=m*c^2"))
# FRANCE	french	16384
# handshake	shake hands	65536
# aa1+aa2	AAAA12	43690
# E=M*C^2	e=m*c^2	65536

