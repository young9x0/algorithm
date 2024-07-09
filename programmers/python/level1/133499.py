import re
def solution(babbling):


  reg = re.compile('aya|ye|woo|ma')
  answer = 0

  for ba in babbling:
    result = reg.findall(ba)
    cnt = 0


    # print('result', result)
    for ex in set(result):
      cnt += len(ex)


    # print('ba, cnt', ba, cnt)
    if len(ba) == cnt:
      # print('same len')
      answer += 1

    else:
      # print('different len')
      continue


  return answer

print(solution(["aya", "yee", "u", "maa"]))
# print(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]))
# ["aya", "yee", "u", "maa"]	1
# ["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]	2
