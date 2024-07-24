def solution(wallpaper):
  lux, luy = 50,50
  rdx, rdy = 0,0
  for row in range(len(wallpaper)):
    for col in range(len(wallpaper[row])):
      if wallpaper[row][col] == '#':
        if row < lux:
          lux = row
        if col < luy:
          luy = col
        if row+1 > rdx:
          rdx = row+1
        if col+1 > rdy:
          rdy = col+1

  return [lux,luy,rdx,rdy]

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
