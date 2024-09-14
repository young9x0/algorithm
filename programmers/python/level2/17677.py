from  collections import Counter
def solution(str1, str2):
  s1 = [str1[i:i+2].lower() for i in range(len(str1)-1) if str1[i:i+2].isalpha()]
  s2 = [str2[i:i+2].lower() for i in range(len(str2)-1) if str2[i:i+2].isalpha()]
  if not s1 and not s2:
    print('hello')
    return 65536

  c1=Counter(s1)
  c2=Counter(s2)
  print('c',c1,c2,c1&c2,c1|c2)

  return int(float(sum((c1&c2).values())) / float(sum((c1|c2).values())) * 65536)


# print(solution("FRANCE",	"french"))
# print(solution("handshake",	"shake hands"))
# print(solution("aa1+aa2",	"AAAA12"))
print(solution("  ",	"  "))
# print(solution("E=M*C^2",	"e=m*c^2"))
# FRANCE	french	16384
# handshake	shake hands	65536
# aa1+aa2	AAAA12	43690
# E=M*C^2	e=m*c^2	65536

