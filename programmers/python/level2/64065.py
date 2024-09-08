def solution(s):
  only_digit=re.findall('\d+',s)
  print(only_digit)
  cnt=Counter(only_digit)
  print(cnt)

  return list(map(int, [key for key,val in sorted(cnt.items(), key=lambda x:x[1], reverse=True)]))

import re
from collections import Counter

print(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}"))
# print(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}"))
# print(solution("{{20,111},{111}}"))
# print(solution("{{123}}"))
# print(solution("{{4,2,3},{3},{2,3,4,1},{2,3}}"))
# "{{2},{2,1},{2,1,3},{2,1,3,4}}"	[2, 1, 3, 4]
# "{{1,2,3},{2,1},{1,2,4,3},{2}}"	[2, 1, 3, 4]
# "{{20,111},{111}}"	[111, 20]
# "{{123}}"	[123]
# "{{4,2,3},{3},{2,3,4,1},{2,3}}"	[3, 2, 4, 1]
