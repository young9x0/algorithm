def solution(arr):
  def is_same(quad_arr):
    first= quad_arr[0][0]
    for row in quad_arr:
      for num in row:
        if first != num:
          return (first,False)

    return (first, True)

  def check_quad(a_len, quad, answer):
    # print('='*50)
    # print('a_len',a_len)
    # print('quad',quad)
    # print('answer',answer)

    idx= a_len//2
    # one two
    # three four
    check_list=[[] for i in range(4)]
    for r_idx in range(a_len):
      # print('-'*50)
      # print('r_idx',r_idx)
      l_row=[]
      r_row=[]
      for n_idx in range(a_len):
        if n_idx < idx:
          l_row.append(quad[r_idx][n_idx])

        else:
          r_row.append(quad[r_idx][n_idx])

      # print('l_row',l_row)
      # print('r_row',r_row)
      if r_idx < idx:
        check_list[0].append(l_row)
        check_list[1].append(r_row)
      else:
        check_list[2].append(l_row)
        check_list[3].append(r_row)

    # print('check_list',check_list)

    for c_list in check_list:
      first, flag = is_same(c_list)
      # print('*'*50)
      # print('c_list',c_list)
      # print('flag',flag)
      # print('first',first)
      if flag:
        answer[first]+=1
      else:
        check_quad(idx, c_list, answer)

  answer = [0,0]
  check_quad(len(arr[0]), arr, answer)

  return answer

print(solution([
  [1,1,0,0],
  [1,0,0,0],
  [1,0,0,1],
  [1,1,1,1]]))
# print(solution([
# [1,1,1,1,1,1,1,1],
# [0,1,1,1,1,1,1,1],
# [0,0,0,0,1,1,1,1],
# [0,1,0,0,1,1,1,1],
# [0,0,0,0,0,0,1,1],
# [0,0,0,0,0,0,0,1],
# [0,0,0,0,1,0,0,1],
# [0,0,0,0,1,1,1,1]
# ]))
# [[1,1,0,0],[1,0,0,0],[1,0,0,1],[1,1,1,1]]	[4,9]
# [[1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1],[0,0,0,0,1,1,1,1],[0,1,0,0,1,1,1,1],[0,0,0,0,0,0,1,1],[0,0,0,0,0,0,0,1],[0,0,0,0,1,0,0,1],[0,0,0,0,1,1,1,1]]	[10,15]
