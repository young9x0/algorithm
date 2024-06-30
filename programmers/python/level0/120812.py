def solution(array):
  if len(array) == 1:
    return 1

  dict={}
  for key in array:
    dict[key]=0

  for num in array:
    dict[num] += 1


  sdict = sorted(dict.items(), key=lambda item: item[1], reverse=True)

  answer = 0
  max = 0
  for key, val in sdict:
    # print('key, val', key, val)
    # print('max', max)
    if max < val:
      max = val
      answer = key
    elif max == val:
      return -1


  return answer

# print(solution([1, 2, 3, 3, 3, 4]))
print(solution([1, 1, 2, 2]))
# [1, 2, 3, 3, 3, 4]	3
# [1, 1, 2, 2]	-1
# [1]	1
