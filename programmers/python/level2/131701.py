def solution(elements):
  sum_set=set()
  el_len=len(elements)
  for idx in range(el_len):
    temp=elements[idx]
    sum_set.add(temp)
    for add_idx in range(idx+1,idx+el_len):
      temp += elements[add_idx%el_len]
      sum_set.add(temp)
  return len(sum_set)

print(solution([7,9,1,1,4]))
# [7,9,1,1,4]	18
