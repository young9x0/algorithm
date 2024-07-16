def solution1(s, skip, index):
  print('s',s)
  new_list = []
  for code in range(97,123):
    if chr(code) not in skip:
      new_list.append(chr(code))
  print(new_list)


  new_dict={}
  idx = 0
  for ch in new_list:
    new_dict[ch] = idx
    idx += 1

  # print("new_dict",new_dict)

  idx = index % len(new_list) # index가 list length를 초과할 경우 고려 필요
  new_list = new_list[idx:] + new_list[:idx]
  # print("new_list",new_list)
  # print("new_list[index:]", new_list[idx:])
  # print(" new_list[:index]",  new_list[:idx])

# 이 부분이 오류


  answer = ''
  for ch in s:
    answer += new_list[new_dict[ch]]

  return answer

def solution2(s, skip, index):
  new_list = []
  for code in range(97,123):
    if chr(code) not in skip:
      new_list.append(chr(code))

  new_dict={}
  idx = 0
  for ch in new_list:
    new_dict[ch] = idx
    idx += 1

  answer = ''
  # print('len(new_dict)',len(new_dict))
  for ch in s:
    # print('new_dict[ch] + index',new_dict[ch] + index)
    answer += new_list[(new_dict[ch] + index) % len(new_list)]


  return answer


print(solution1( "a", "bcdefghijk", 20))
print(solution2( "a", "bcdefghijk", 20))
# "aukks"	"wbqd"	5	"happy"
#  "a", "bcdefghijk", 20, "o"
