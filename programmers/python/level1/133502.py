def solution(ingredient):
  cnt = 0
  temp = ''.join((map(str ,ingredient)))
  # print(temp)

  while '1231' in temp:
    # print('---',temp, temp.find('1231'))
    if temp.find('1231') >= 4:
      temp = temp[temp.find('1231')-4:]
      # print('changed temp', temp)
    temp = temp.replace('1231','',1)
    cnt+=1
  return cnt

print(solution([2, 1, 1, 2, 3, 1, 2, 3, 1,3,2,3,2,3,1,2,3,1]))
# print(solution([1, 3, 2, 1, 2, 1, 3, 1, 2]))
# [2, 1, 1, 2, 3, 1, 2, 3, 1]	2
# [1, 3, 2, 1, 2, 1, 3, 1, 2]	0
# 1, 2, 3, 1
