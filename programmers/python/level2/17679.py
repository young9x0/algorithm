def solution(m, n, board):
  answer=0
  for cols in zip(*board):
    print('cols',cols)
  field = [list(cols) for cols in zip(*board)]
  print('field',field)
  while True:
    bomb = set()
    for row in range(n - 1):
      for col in range(m - 1):
        try:
          if field[row][col] == field[row + 1][col] == field[row][col + 1] == field[row + 1][col + 1]:
            bomb.update({(row, col), (row + 1, col), (row, col + 1), (row + 1, col + 1)})
        except:
          break

    print('bomb',bomb)
    if not len(bomb):
      break

    for r, c in bomb:
      field[r][c] = ''
      answer += 1

    for row in range(n):
      field[row] = list(''.join(field[row]))
    print('field',field)

  return answer

print(solution(4,	5,	[
  "CCBDE",
  "AAADE",
  "AAABF",
  "CCBBF"]))
# print(solution(6,	6,	["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"]))

# 4	5	["CCBDE", "AAADE", "AAABF", "CCBBF"]	14
# 6	6	["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"]	15
