def solution(elements):
  el_len=len(elements)
  elements *=2

  print(elements)
  return len(set(sum(elements[j:j+n] for j in range(el_len) for n in range(1,el_len+1))))

print(solution([7,9,1,1,4]))
# [7,9,1,1,4]	18
