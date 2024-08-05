def solution(n):
  answer = 0
  int2bin='{0:b}'.format(n)
  print('int2bin',int2bin)
  count = int2bin.count("1")
  print("count", count)
  bin_len= len(int2bin)

  if count == bin_len:
    answer = '0'+int2bin
    print('1:',int(answer,2))
    return int(answer,2)

  # 가능한 경우는?
  if count-1 == bin_len:
    for i in range(0,count):
      answer+='1'
    print('2:',int('0'+answer,2))
    return int('0'+answer,2)

  r_int2char = int2bin[::-1]
  print('r_int2char:',r_int2char)
  index=0
  flag=0
  if r_int2char[0:1] == '0':
    print('r_int2char[0:1] == 0')
    for i in range(1, bin_len):
      if index != 0:
        break
      if r_int2char[i:].find('1') == 0:
        print('r_int2char[i:] have 1 at index 0')
        flag=1
      if r_int2char[i:].find('0') == 0 and flag == 1:
        print('r_int2char[i:] have 0 at index 0 and flag=1')
        index=i
  else:
    print('r_int2char[0:1] != 0')
    for i in range(0, bin_len):
      if index != 0:
        break
      if r_int2char[i:].find('0') == 0:
        print('r_int2char[i:] have 0 at index 0')
        index=i
  print('index', index)
  real_index = bin_len - index - 1
  print('real_index',real_index)
  answer=int2bin[0:real_index]
  print('answer',answer)
  answer += '1'
  r_count=count-answer.count('1')
  print('r_count',r_count)
  banswer = ''
  for i in range(0,r_count):
    banswer+='1'
  for i in range(0, bin_len):
    if (len(answer)+len(banswer)) == bin_len:
      print('(len(answer)+len(banswer)) == bin_len')
      return int(answer+banswer,2)
    else:
      banswer='0'+banswer

  return answer

# print(solution(78))
# print(solution(15))
# print(solution(6))
print(solution(949250))
# 78	83
# 15	23
