def solution(book_time):
  time_table = [0 for _ in range(60*24)]
  # print('time table', time_table)

  for start, end in book_time:
    start_minutes=60* int(start[:2]) + int(start[3:5])
    end_minutes=60* int(end[:2]) + int(end[3:]) + 10
    if end_minutes> 60*24 - 1:
      end_minutes = 60*24 - 1

    for idx in range(start_minutes, end_minutes):
      time_table[idx] += 1

  print('time table', time_table)
  return max(time_table)

# print(solution([["00:00", "07:00"], ["01:40", "03:20"], ["03:20", "05:20"], ["00:10", "03:10"], ["05:20", "07:20"]]))
print(solution([["15:00", "17:00"], ["16:40", "18:20"], ["14:20", "15:20"], ["14:10", "19:20"], ["18:20", "21:20"]]))
# print(solution([["09:10", "10:10"], ["10:20", "12:20"]]))
# print(solution([["10:20", "12:30"], ["10:20", "12:30"], ["10:20", "12:30"]]))

# [["15:00", "17:00"], ["16:40", "18:20"], ["14:20", "15:20"], ["14:10", "19:20"], ["18:20", "21:20"]]	3
# [["09:10", "10:10"], ["10:20", "12:20"]]	1
# [["10:20", "12:30"], ["10:20", "12:30"], ["10:20", "12:30"]]	3