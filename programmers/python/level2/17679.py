def solution(m, n, board):
  answer = 0
  b_list= [[block for block in blocks] for blocks in board]
  # print('b_list',b_list)

  def change_pos(row, col):
    # print('='*50)
    # print('change_pos',row, col)

    while row>0:
      # print(row,'b_list[row][col]',b_list[row][col])
      # print(row-1,'b_list[row-1][col]',b_list[row-1][col])

      if b_list[row-1][col] != '-1':
        # print('prev word')
        b_list[row][col] = b_list[row-1][col]
        b_list[row-1][col] = '-1'

      # print('b_list')
      # for b in  b_list:
      #   print(f"\n{b}")
      row-=1
  def check_square():
    cnt=0
    idx_set=set()
    for row in range(m-1):
      for col in range(n-1):
        upper=b_list[row][col:col+2]
        lower=b_list[row+1][col:col+2]
        if upper[0] == '-1':
          continue

        tmp = [upper[0]]*2
        # print(row, col,'upper, lower',upper, lower)
        # print('tmp',tmp)
        if upper == tmp and lower == tmp:
          # print('='*50)
          idx_set.add((row,col))
          idx_set.add((row,col+1))
          idx_set.add((row+1,col))
          idx_set.add((row+1,col+1))

    if len(idx_set)>0:
      sorted_set=sorted(idx_set)
      # print('sorted_set',sorted_set)

      for r_idx, c_idx in sorted_set:
        change_pos(r_idx, c_idx)

      # print('b_list',b_list)
      if len(idx_set)>0:
        cnt+=len(idx_set)
        idx_set=set()

    return cnt

  while True:
    # print('-'*50)
    cnt = check_square()
    if cnt==0:
      return answer
    else:
      answer+=cnt

  return answer

print(solution(4,	5,	["CCBDE", "AAADE", "AAABF", "CCBBF"]))
# print(solution(6,	6,	["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"]))

# 4	5	["CCBDE", "AAADE", "AAABF", "CCBBF"]	14
# 6	6	["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"]	15
