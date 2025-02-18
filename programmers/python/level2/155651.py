def solution(book_time):
  rooms=[[book_time[0]]]
  b_len = len(book_time)
  for idx in range(1, b_len):
    # print('-'*50)
    # print(' book_time[idx]', book_time[idx])
    n_start, n_finish= book_time[idx]
    n_s_hour, n_s_min = n_start.split(":")
    n_f_hour, n_f_min = n_finish.split(":")
    r_len = len(rooms)
    is_search = True
    if is_search:
      for r_idx in range(r_len):
        # print('r_idx', r_idx, rooms[r_idx])
        for book in rooms[r_idx]:
          # print('book', book)
          r_start, r_finish = book
          r_s_hour, r_s_min = r_start.split(":")
          r_f_hour, r_f_min = r_finish.split(":")
          if (int(n_f_hour) <= int(r_s_hour) and int(n_f_min)+10 <= int(r_s_min)) or (int(r_f_hour) <= int(n_s_hour) and  int(r_f_min)+10 <= int(n_s_min)):
            # print('possible')
            rooms[r_idx].append(book_time[idx])
            is_search = False

    if is_search:
      rooms.append([book_time[idx]])
    # print('rooms', rooms)

  return len(rooms)

# print(solution([["15:00", "17:00"], ["16:40", "18:20"], ["14:20", "15:20"], ["14:10", "19:20"], ["18:20", "21:20"]]))
# print(solution([["09:10", "10:10"], ["10:20", "12:20"]]))
print(solution([["10:20", "12:30"], ["10:20", "12:30"], ["10:20", "12:30"]]))

# [["15:00", "17:00"], ["16:40", "18:20"], ["14:20", "15:20"], ["14:10", "19:20"], ["18:20", "21:20"]]	3
# [["09:10", "10:10"], ["10:20", "12:20"]]	1
# [["10:20", "12:30"], ["10:20", "12:30"], ["10:20", "12:30"]]	3