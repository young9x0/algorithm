def solution(land):
  max=0
  N= len(land)
  # print('N',N)

  if N == 0:
    return 0
  def find_max_two(list):
    return sorted(list, key=lambda x: x[1])[-2:]

  def make_two_step_max(row_idx, result):
    # print('-'*50)
    if row_idx <0:
      return result

    next_tmp=[(idx,col) for idx,col in enumerate(land[row_idx])]
    next_max_two=find_max_two(next_tmp)
    # print('next_max_two',next_max_two)

    plus_tmp=[]
    for c_key, c_val in result:
      for n_key, n_val in next_max_two:
        if c_key != n_key:
          plus_tmp.append((n_key, c_val+n_val))

    # print('plus_tmp',plus_tmp)
    result=find_max_two(plus_tmp)
    # print('result', result)
    return make_two_step_max(row_idx-1,result)

  cur_tmp=[(idx,col) for idx,col in enumerate(land[N-1])]
  cur_max_two=find_max_two(cur_tmp)
  # print('cur_max_two',cur_max_two)
  last= make_two_step_max(N-2, cur_max_two)

  for key, val in last:
    if max < val:
      max=val
  return max

print(solution([[1, 1, 3, 1], [2, 3, 2, 2], [1, 4, 1, 1]]))
# print(solution([[6, 7, 1, 2], [2, 3, 10, 8], [1, 3, 9, 4], [7, 11, 4, 9]]))
# print(solution([[1,4,8,9],[1,8,2,10],[5,2,1,99],[7,8,1,100]]))
# [[1,2,3,5],[5,6,7,8],[4,3,2,1]]	16
