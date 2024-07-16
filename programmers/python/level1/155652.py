def solution(s, skip, index):
  new_list = []
  for code in range(97,123):
    if chr(code) not in skip:
      new_list.append(chr(code))
  # print(new_list)

  new_dict={}
  idx = 0
  for ch in new_list:
    new_dict[ch] = idx
    idx += 1

  moved_list = new_list[index:] + new_list[:index]
  moved_dict={}
  idx = 0
  for ch in moved_list:
    moved_dict[idx] = ch
    idx += 1

  # print(new_dict)
  # print(moved_dict)
  answer = ''
  for ch in s:
    # print(ord(ch))
    answer += moved_dict[new_dict[ch]]

  return answer

print(solution("aukks",	"wbqd",	5	))
# "aukks"	"wbqd"	5	"happy"
