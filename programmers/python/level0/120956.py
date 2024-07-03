import re
def solution(babbling):
  reg = re.compile('^(aya|ye|woo|ma)+$')

  answer = 0
  for sound in babbling:
    print('reg sound',sound, reg.match(sound))
    if reg.match(sound):
      answer += 1

  return answer

# print(solution(["aya", "yee", "u", "maa", "wyeoo"]))
# print(solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]))
print(solution(["yemama"]))

# ["aya", "yee", "u", "maa", "wyeoo"]	1
# ["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]	3
