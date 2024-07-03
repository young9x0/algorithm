import re
def solution(babbling):
  possible = [ "aya", "ye", "woo", "ma"]
  answer = 0
  for sound in babbling:
    # print('sound', sound)
    for pos in possible:
      sound =sound.replace(pos,'0')
    # print('* sound', sound)
    reg = re.compile('[a-z]')
    x = reg.search(sound)
    # print('x', x == None)
    if x == None:
      answer += 1

  return answer

print(solution(["aya", "yee", "u", "maa", "wyeoo"]))
# print(solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]))

# ["aya", "yee", "u", "maa", "wyeoo"]	1
# ["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]	3
