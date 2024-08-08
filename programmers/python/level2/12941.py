def solution(A,B):
  answer = set()

  def add_multiple(a_list,b_list, temp):
    # print('-'*50)
    # print('a_list',a_list)
    # print('b_list',b_list)
    if len(a_list) > 0:
      for a_idx, a_val in enumerate(a_list):
        for b_idx, b_val in enumerate(b_list):
          if a_val in a_list and b_val in b_list:
            a_temp.pop(a_idx)
            b_temp.pop(b_idx)
            temp += a_val*b_val
            # print('temp',temp)
            return add_multiple(a_list,b_list,temp)
    else:
      return temp

  for a_idx, a_val in enumerate(A):
    for b_idx, b_val in enumerate(B):
      a_temp = [copy_a for copy_a in A]
      a_temp.pop(a_idx)
      b_temp = [copy_b for copy_b in B]
      b_temp.pop(b_idx)
      # print('a_temp',a_temp)
      # print('b_temp',b_temp)
      temp = a_val*b_val
      # print('temp',temp)
      result = add_multiple(a_temp,b_temp,temp)
      # print('result',result)
      answer.add(result)

  return min(answer)

# print(solution([1, 4, 2],	[5, 4, 3]))
# print(solution([1, 4, 2],	[5, 4, 4]))
print(solution([1,2],	[3,4]))
# [1, 4, 2]	[5, 4, 4]	29
# [1,2]	[3,4]	10
