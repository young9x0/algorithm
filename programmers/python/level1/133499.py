def solution(babbling):
  baby_say = ["aya", "ye", "woo", "ma",
              "00","11","22","33"]
  answer = 0
  for bab in babbling:
    print('1 bab',bab)
    for i in range(4):
      bab = bab.replace(baby_say[i], str(i))
      print('2 bab',bab)
    for i in range(4,8):
      bab = bab.replace(baby_say[i], "a")
      print('3 bab',bab)
    if bab.isdigit(): answer += 1
  return answer

# print(solution(["aya", "yee", "u", "maa"]))
print(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]))
# ["aya", "yee", "u", "maa"]	1
# ["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]	2
