

import re
import math
def solution(str1, str2):
  # for i in range(0, len(str1)-1):
  #   find1=re.findall('[^a-zA-Z]+', str1[i:i+2])
  #   print('find1',find1)
  str1 = [str1[i:i+2].lower() for i in range(0, len(str1)-1) if not re.findall('[^a-zA-Z]+', str1[i:i+2])]
  # print('str1',str1)
  str2 = [str2[i:i+2].lower() for i in range(0, len(str2)-1) if not re.findall('[^a-zA-Z]+', str2[i:i+2])]

  intersection=set(str1)&set(str2)
  union=set(str1)|set(str2)

  multiple_constant=65536
  if len(union) == 0:
    return multiple_constant

  intersection_sum=sum([min(str1.count(str), str2.count(str)) for str in intersection])
  union_sum=sum([max(str1.count(str), str2.count(str)) for str in union])

  return math.floor((intersection_sum/union_sum)*multiple_constant)


# print(solution("FRANCE",	"french"))
# print(solution("handshake",	"shake hands"))
# print(solution("aa1+aa2",	"AAAA12"))
print(solution("  ",	"  "))
# print(solution("E=M*C^2",	"e=m*c^2"))
# FRANCE	french	16384
# handshake	shake hands	65536
# aa1+aa2	AAAA12	43690
# E=M*C^2	e=m*c^2	65536

