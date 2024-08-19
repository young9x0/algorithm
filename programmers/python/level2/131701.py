def solution(elements):
  sum_set=set()
  temp=[el for el in elements] + [el for el in elements[:-1]]
  # print(temp)
  for cnt in range(1,len(elements)+1):
    # print('cnt',cnt)
    for idx, element in enumerate(elements):
      # print('idx, sum(elements[idx:idx+cnt])',idx, sum(temp[idx:idx+cnt]))
      sum_set.add(sum(temp[idx:idx+cnt]))
  return len(sum_set)

print(solution([7,9,1,1,4]))
# [7,9,1,1,4]	18
