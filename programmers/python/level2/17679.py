def pop_num(m,n,field):
  pop_set = set()

  # search
  for i in range(1, n):
    for j in range(1, m):
      if field[i][j] == field[i - 1][j - 1] == field[i - 1][j] == field[i][j - 1] != '_':
        pop_set |= set([(i, j), (i - 1, j - 1), (i - 1, j), (i, j - 1)])

  # set_board
  for i, j in pop_set:
    field[i][j] = 0
  for i, row in enumerate(field):
    empty = ['_'] * row.count(0)
    field[i] = empty + [block for block in row if block != 0]

  return len(pop_set)
def solution(m, n, board):
  answer=0

  field = list(map(list, zip(*board)))
  # print('field',field)

  while True:
    pop=pop_num(m,n,field)
    if pop==0:return answer
    answer+=pop

  return answer

print(solution(4,	5,	[
  "CCBDE",
  "AAADE",
  "AAABF",
  "CCBBF"]))
# print(solution(6,	6,	["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"]))

# 4	5	["CCBDE", "AAADE", "AAABF", "CCBBF"]	14
# 6	6	["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"]	15
