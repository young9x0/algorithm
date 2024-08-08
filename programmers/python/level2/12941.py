def solution(A,B):
  answer = 0
  a_temp = [copy_a for copy_a in A]
  b_temp = [copy_b for copy_b in B]
  while len(a_temp) > 0:
    a_val = max(a_temp)
    a_idx = a_temp.index(a_val)
    a_temp.pop(a_idx)
    b_val = min(b_temp)
    b_idx = b_temp.index(b_val)
    b_temp.pop(b_idx)
    answer += a_val * b_val

  return answer

# print(solution([1, 4, 2],	[5, 4, 3]))
# print(solution([1, 4, 2],	[5, 4, 4]))
print(solution([1,2],	[3,4]))
print(solution([2],	[3]))
# [1, 4, 2]	[5, 4, 4]	29
# [1,2]	[3,4]	10
