def solution(wallpaper):
  answer = [50,50,0,0]
  for row, line in enumerate(wallpaper):
    for col, paper in enumerate(line):
      if paper == '#':
        # print('paper', row, col)
        answer[:2] = min(row, answer[0]), min(col, answer[1])
        answer[2:] = max(row+1, answer[2]), max(col+1, answer[3])
        # print('answer',answer)

  return answer

# print(solution([".#...",
#                 "..#..",
#                 "...#."]))
# print(solution(["..........", ".....#....", "......##..", "...##.....", "....#....."]))
# print(solution([".##...##.", "#..#.#..#", "#...#...#", ".#.....#.", "..#...#..", "...#.#...", "....#...."]))
print(solution(["..", "#."]))
# [".#...", "..#..", "...#."]	[0, 1, 3, 4]
# ["..........", ".....#....", "......##..", "...##.....", "....#....."]	[1, 3, 5, 8]
# [".##...##.", "#..#.#..#", "#...#...#", ".#.....#.", "..#...#..", "...#.#...", "....#...."]	[0, 0, 7, 9]
# ["..", "#."]	[1, 0, 2, 1]
