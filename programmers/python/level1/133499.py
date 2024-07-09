def solution(babbling):
  answer = 0
  for ba in babbling:
    for wo in ['aya','ye','woo','ma']:
      if wo*2 not in ba:
        ba = ba.replace(wo,' ')
    if len(ba.strip()) == 0:
      answer += 1


  return answer

print(solution(["aywa", "yemae", "aauy", "mawaoo"]))
print(solution(["aya", "yee", "u", "maa"]))
print(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]))
# ["aya", "yee", "u", "maa"]	1
# ["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]	2
